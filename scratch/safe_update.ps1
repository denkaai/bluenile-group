$scriptPath = "c:\Users\User\bluenile-group\script.js"
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$content = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)

$content = $content.Replace("const itemsPerPage = 24;", "const itemsPerPage = 1000;")
$content = $content.Replace(
    "shopCount.innerHTML = ``Showing <strong>`${startIndex + 1}-`${Math.min(endIndex, visibleCards.length)}</strong> of <strong>`${visibleCards.length}</strong> products``;",
    "shopCount.innerHTML = ``Showing all <strong>`${visibleCards.length}</strong> products``;"
)

$oldBarbedWire = @"
    fromPrice: 1150,
    variants: [
      { label: '12.5G - 20Kgs (240m)', price: 1150 },
      { label: '12.5G - 25Kgs (480m)', price: 2450 },
      { label: '12.5G - 30kgs (610m)', price: 3150 },
      { label: '16G - 20Kgs (240m)', price: 1580 },
      { label: '16G - 25Kgs (480m)', price: 2850 },
      { label: '16G - 30kgs (610m)', price: 3750 }
    ]
"@

$newBarbedWire = @"
    fromPrice: 3150,
    variants: [
      { label: '12.5G - 50Kgs (480m)', price: 4350 },
      { label: '12.5G - 65Kgs (610m)', price: 6150 },
      { label: '16G - 20Kgs (480m)', price: 3150 },
      { label: '16G - 25Kgs (610m)', price: 3950 }
    ]
"@

# Fix any newlines difference
$oldBarbedWire = $oldBarbedWire -replace "`r`n", "`n"
$newBarbedWire = $newBarbedWire -replace "`r`n", "`n"

$content = $content -replace "`r`n", "`n"
$content = $content.Replace($oldBarbedWire, $newBarbedWire)

# Change line endings back to original or just write out
[System.IO.File]::WriteAllText($scriptPath, $content, $utf8NoBom)
Write-Host "Script.js updated safely."
