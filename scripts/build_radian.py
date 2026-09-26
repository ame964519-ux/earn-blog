import os, zipfile, json

theme_dir = r'C:\Users\Admin\v'
desktop_dir = r'C:\Users\Admin\Desktop'

def write_f(rel_path, content):
    full_path = os.path.join(theme_dir, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote: {rel_path}')
