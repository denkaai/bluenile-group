import os

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace("â„¢", "")
    content = content.replace("â€”", "-")
    content = content.replace("Ã—", "x")
    content = content.replace("â€", "")

    if file_path.endswith("script.js"):
        sink1 = """  {
    id: 63, category: 'Kitchen Sinks', name: 'Commercial Grade Satin Stainless Steel Double Bowl Sink', badge: 'Commercial',
    image: 'assets/products/kitchen sinks/sinks.jpg',
    images: ['assets/products/kitchen sinks/sinks.jpg'],
    description: 'Heavy-duty Commercial Grade Satin Stainless Steel Double Bowl Sink.',
    fromPrice: 10900,
    variants: [{ label: 'Satin Stainless Steel Double Bowl', price: 10900 }]
  },"""
        sink2 = """  {
    id: 64, category: 'Kitchen Sinks', name: 'Fantasy Composite Granite Kitchen Sink (Grey)', badge: 'Granite',
    image: 'assets/products/kitchen sinks/fantasy-kitchen-sink.jpg',
    images: ['assets/products/kitchen sinks/fantasy-kitchen-sink.jpg'],
    description: 'Elegant Fantasy Composite Granite Kitchen Sink in Grey finish.',
    fromPrice: 16800,
    variants: [{ label: 'Fantasy Composite Granite (Grey)', price: 16800 }]
  },"""
        
        # Replace the literal blocks (try with unix newlines if windows fail)
        content = content.replace(sink1, "")
        content = content.replace(sink2, "")
        content = content.replace(sink1.replace('\r\n', '\n'), "")
        content = content.replace(sink2.replace('\r\n', '\n'), "")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file(r"c:\Users\User\bluenile-group\script.js")
fix_file(r"c:\Users\User\bluenile-group\index.html")
print("Done")
