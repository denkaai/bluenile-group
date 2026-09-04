$ErrorActionPreference = "Stop"
$scriptPath = "c:\Users\User\bluenile-group\script.js"

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$contentStr = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)
$lines = $contentStr -split "`r`n|`n"
$newLines = @()

$lastImage = ""

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    if ($line -match "image:\s*'([^']+)'") {
        $lastImage = $matches[1]
    }
    
    if ($line -match "images:\s*\[\]") {
        $line = $line -replace "images:\s*\[\]", "images: ['$lastImage']"
    }
    
    $newLines += $line
}

$newContentStr = $newLines -join "`r`n"
[System.IO.File]::WriteAllText($scriptPath, $newContentStr, $utf8NoBom)
Write-Host "Fixed empty images arrays"
