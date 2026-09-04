$ErrorActionPreference = "Stop"
$scriptPath = "c:\Users\User\bluenile-group\script.js"
$productsDir = "c:\Users\User\bluenile-group\assets\products"
$baseDir = "c:\Users\User\bluenile-group\"

# 1. Get all image files in assets/products
$files = Get-ChildItem -Path $productsDir -Recurse -Include *.jpg,*.jpeg,*.png,*.webp
$allImages = @()
foreach ($f in $files) {
    # get relative path
    $relPath = $f.FullName.Substring($baseDir.Length).Replace('\', '/')
    $allImages += $relPath
}

# 2. Read script.js safely with UTF-8
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$contentStr = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)
$lines = $contentStr -split "`r`n|`n"
$newLines = @()

$currentBaseName = ""
$currentImages = @()

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    if ($line -match "image:\s*'([^']+)'") {
        $mainImage = $matches[1]
        
        # determine base name from mainImage (e.g. assets/products/bamburi-cement-1.jpg -> bamburi-cement)
        $fileName = [System.IO.Path]::GetFileNameWithoutExtension($mainImage)
        $baseName = $fileName -replace '-\d+$',''
        
        # special overrides for toilets to only group the exact product
        if ($fileName -match "toilet \(\d+\)") { $baseName = "toilet" }
        elseif ($fileName -match "toilet-\d+") { $baseName = "toilet" }
        elseif ($fileName -match "cabinets") { $baseName = "cabinets" }
        
        # find matching images
        $matched = @()
        foreach ($img in $allImages) {
            $imgName = [System.IO.Path]::GetFileNameWithoutExtension($img)
            
            $match = $false
            if ($img -eq $mainImage) {
                $match = $true
            } elseif ($baseName -eq 'toilet') {
                if ($imgName -match "toilet \(\d+\)" -or $imgName -match "toilet-\d+") { $match = $true }
            } elseif ($baseName -eq 'cabinets') {
                if ($img -match 'cabinets') { $match = $true } # all cabinets in cabinets folder
            } elseif ($baseName -eq 'white_tetragon_wall_hung_toilet_pan') {
                # do not match everything
                if ($img -eq $mainImage) { $match = $true }
            } else {
                # generic matching
                if ($imgName.StartsWith($baseName)) { $match = $true }
            }
            
            if ($match) { $matched += $img }
        }
        
        # make unique and sort
        $matched = $matched | Select-Object -Unique | Sort-Object
        
        # format array
        $arrStr = ""
        foreach ($m in $matched) {
            if ($arrStr -ne "") { $arrStr += ", " }
            $arrStr += "'$m'"
        }
        
        $currentImages = $arrStr
        $newLines += $line
    }
    elseif ($line -match "^(\s*images:\s*\[).*(\],?)$") {
        # This matches lines like "    images: ['...'],"
        $prefix = $matches[1]
        $suffix = $matches[2]
        
        # In script.js, sometimes it's just "    images: ['...']" without comma depending on where it is, but regex matches up to closing bracket
        $newline = $line -replace 'images:\s*\[[^\]]*\]', "images: [$currentImages]"
        $newLines += $newline
    }
    else {
        $newLines += $line
    }
}

$newContentStr = $newLines -join "`r`n"
[System.IO.File]::WriteAllText($scriptPath, $newContentStr, $utf8NoBom)
Write-Host "Updated script.js successfully"
