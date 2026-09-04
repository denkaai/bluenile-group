$ErrorActionPreference = "Stop"
$scriptPath = "c:\Users\User\bluenile-group\script.js"
$newProdsPath = "c:\Users\User\bluenile-group\scratch\new_products.js"

$utf8NoBom = New-Object System.Text.UTF8Encoding $False
$scriptText = [System.IO.File]::ReadAllText($scriptPath, $utf8NoBom)
$newProdsText = [System.IO.File]::ReadAllText($newProdsPath, $utf8NoBom)

# Trim [ and ]
$newProdsText = $newProdsText.Trim()
if ($newProdsText.StartsWith("[")) { $newProdsText = $newProdsText.Substring(1) }
if ($newProdsText.EndsWith("]")) { $newProdsText = $newProdsText.Substring(0, $newProdsText.Length - 1) }

# We know the last item ends with:
#     variants: [
#       { label: 'Deluxe Vanity Suite', price: 24500 }
#     ]
#   }
# ];
$search = "    ]`r`n  }`r`n];"
$replace = "    ]`r`n  },$newProdsText`r`n];"

# Note: sometimes line endings are just \n
$search2 = "    ]`n  }`n];"
$replace2 = "    ]`n  },$newProdsText`n];"

if ($scriptText.Contains($search)) {
    $scriptText = $scriptText.Replace($search, $replace)
    [System.IO.File]::WriteAllText($scriptPath, $scriptText, $utf8NoBom)
    Write-Host "Appended new products (CRLF)"
} elseif ($scriptText.Contains($search2)) {
    $scriptText = $scriptText.Replace($search2, $replace2)
    [System.IO.File]::WriteAllText($scriptPath, $scriptText, $utf8NoBom)
    Write-Host "Appended new products (LF)"
} else {
    Write-Host "Could not find the target string to replace!"
}
