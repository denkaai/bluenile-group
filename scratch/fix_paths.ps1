$scriptPath = "c:\Users\User\bluenile-group\script.js"
$content = Get-Content -Raw $scriptPath

$replacements = @{
    "assets/products/kitchen sinks/trendy-black-quartz.jpg" = "assets/products/kitchen sinks/trendy-black-kitchen-sink.webp"
    "assets/products/kitchen sinks/sus304-stainless-steel.jpg" = "assets/products/kitchen sinks/stainless-kitchen-sinks.webp"
    "assets/products/kitchen sinks/stainless-deep-single.jpg" = "assets/products/kitchen sinks/steel-kitchen-sink.jpg"
    "assets/products/kitchen sinks/stainless-double-dropin.jpg" = "assets/products/kitchen sinks/kitchen-sink-2.jpg"
    "assets/products/kitchen sinks/commercial-satin-stainless.jpg" = "assets/products/kitchen sinks/sinks.jpg"
    "assets/products/kitchen sinks/fantasy-composite-granite.jpg" = "assets/products/kitchen sinks/fantasy-kitchen-sink.jpg"
    "assets/products/anti-twist/shaka-black-chrome.jpg" = "assets/products/anti-twist/shaka-black-anti-twist-nickel-plate.jpg"
    "assets/products/anti-twist/shaka-chrome-luxe.jpg" = "assets/products/anti-twist/shaka-chrome-black-nyl-sil-anti-twist.jpg"
    "assets/products/anti-twist/shaka-white-chrome.jpg" = "assets/products/anti-twist/shaka-chrome-white-anti-twist.jpg"
    "assets/products/anti-twist/shaka-white-nickel.jpg" = "assets/products/anti-twist/shaka-white-anti-twist-nickel-plate.jpg"
    "assets/products/showers/corner-pentagon-glass.jpg" = "assets/products/showers/shower-enclosure-pentagon-chrome-frame.jpg"
    "assets/products/showers/chrome-adjustable-pivot.jpg" = "assets/products/showers/shower-1.jpg"
    "assets/products/showers/square-corner-glass.jpg" = "assets/products/showers/square-shower-enclosure-white.jpg"
    "assets/products/showers/ekos-pentagon-acrylic.jpg" = "assets/products/showers/ekos-shower-tray-pentagon.webp"
    "assets/products/showers/shaka-chrome-luxe-shower.jpg" = "assets/products/showers/shaka-chrome-black-nyl-sil-anti-twist.jpg"
    "assets/products/showers/shaka-white-chrome-shower.jpg" = "assets/products/showers/shaka-white-anti-twist-nickel-plate.jpg"
    "assets/products/showers/matte-black-aluminum.jpg" = "assets/products/showers/shower-enclosure-pentagon-chrome-frame-.jpg"
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

# Ensure missing images logic
$utf8NoBom = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllText($scriptPath, $content, $utf8NoBom)
Write-Host "Replaced broken image paths."
