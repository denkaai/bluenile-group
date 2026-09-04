$script = Get-Content "script.js" -Raw
$matches = [regex]::Matches($script, "assets/[^'""\s]+")
$missing = @()
$found = @()
foreach ($m in $matches) {
    $p = $m.Value
    if (-not (Test-Path $p)) {
        $missing += $p
    } else {
        $found += $p
    }
}
Write-Host "MISSING IN SCRIPT.JS:"
$missing | Select-Object -Unique

Write-Host "`nCHECKING INDEX.HTML:"
$index = Get-Content "index.html" -Raw
$matchesIndex = [regex]::Matches($index, "assets/[^'""\s\)]+")
$missingIndex = @()
foreach ($m in $matchesIndex) {
    $p = $m.Value
    if (-not (Test-Path $p)) {
        $missingIndex += $p
    }
}
Write-Host "MISSING IN INDEX.HTML:"
$missingIndex | Select-Object -Unique

Write-Host "`nCHECKING SHOP.HTML:"
$shop = Get-Content "shop.html" -Raw
$matchesShop = [regex]::Matches($shop, "assets/[^'""\s\)]+")
$missingShop = @()
foreach ($m in $matchesShop) {
    $p = $m.Value
    if (-not (Test-Path $p)) {
        $missingShop += $p
    }
}
Write-Host "MISSING IN SHOP.HTML:"
$missingShop | Select-Object -Unique
