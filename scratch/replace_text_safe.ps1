$scriptPath = "c:\Users\User\bluenile-group\script.js"
$indexPath = "c:\Users\User\bluenile-group\index.html"
$utf8NoBom = New-Object System.Text.UTF8Encoding $False

# Construct the corrupt strings using char codes to avoid parser errors
$tm = "$([char]0x00E2)$([char]0x201E)$([char]0x00A2)"
$dash = "$([char]0x00E2)$([char]0x20AC)$([char]0x201D)"
$cross = "$([char]0x00C3)$([char]0x0097)"

$content = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)
$content = $content.Replace($tm, "")
$content = $content.Replace($dash, "-")
$content = $content.Replace($cross, "x")

$sink1 = @"
  {
    id: 63, category: 'Kitchen Sinks', name: 'Commercial Grade Satin Stainless Steel Double Bowl Sink', badge: 'Commercial',
    image: 'assets/products/kitchen sinks/sinks.jpg',
    images: ['assets/products/kitchen sinks/sinks.jpg'],
    description: 'Heavy-duty Commercial Grade Satin Stainless Steel Double Bowl Sink.',
    fromPrice: 10900,
    variants: [{ label: 'Satin Stainless Steel Double Bowl', price: 10900 }]
  },
"@
$sink2 = @"
  {
    id: 64, category: 'Kitchen Sinks', name: 'Fantasy Composite Granite Kitchen Sink (Grey)', badge: 'Granite',
    image: 'assets/products/kitchen sinks/fantasy-kitchen-sink.jpg',
    images: ['assets/products/kitchen sinks/fantasy-kitchen-sink.jpg'],
    description: 'Elegant Fantasy Composite Granite Kitchen Sink in Grey finish.',
    fromPrice: 16800,
    variants: [{ label: 'Fantasy Composite Granite (Grey)', price: 16800 }]
  },
"@

$sink1 = $sink1 -replace "`r`n", "`n"
$sink2 = $sink2 -replace "`r`n", "`n"
$content = $content -replace "`r`n", "`n"
$content = $content.Replace($sink1, "")
$content = $content.Replace($sink2, "")

[System.IO.File]::WriteAllText($scriptPath, $content, $utf8NoBom)

$indexContent = [System.IO.File]::ReadAllText($indexPath, $utf8NoBom)
$indexContent = $indexContent.Replace($tm, "")
$indexContent = $indexContent.Replace($dash, "-")
$indexContent = $indexContent.Replace($cross, "x")
[System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)

Write-Host "Replaced successfully."
