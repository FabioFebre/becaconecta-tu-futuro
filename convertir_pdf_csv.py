import pdfplumber
import pandas as pd

pdf_path = "Beca-18-Lista-de-IES-que-han-suscrito-convenio-1.pdf"
all_rows = []

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages, start=1):
        try:
            tables = page.extract_tables()
            for table in tables:
                for row in table:
                    if row:  # evita filas totalmente vacías
                        all_rows.append(row)
        except Exception as e:
            print(f"⚠️ Error en la página {page_num}: {e}")

# Crear DataFrame
df = pd.DataFrame(all_rows)

# --- Aseguramos que tenga al menos 7 columnas ---
df = df[[i for i in range(min(7, df.shape[1]))]]

# --- Renombrar columnas ---
df.columns = [
    "IES",
    "TIPO DE IES",
    "TIPO DE GESTION",
    "DEPARTAMENTO/REGION",
    "SEDE (DISTRITO)",
    "PROGRAMA ACADEMICO",
    "MODALIDAD"
]

# --- Limpiar datos ---
# 1. Eliminar filas vacías
df = df.dropna(how="all")

# 2. Filtrar filas basura
df = df[~df["IES"].astype(str).str.contains(
    "Bec|Listado|Convenio|Pronabec|ITEM|Mostrando",
    case=False,
    na=False
)]

# 3. Limpiar saltos de línea dentro de celdas
df = df.applymap(lambda x: x.replace("\n", " ").strip() if isinstance(x, str) else x)

# --- Guardar como CSV limpio ---
output_file = "beca18_instituciones_maestro.csv"
df.to_csv(output_file, index=False, encoding="utf-8-sig")

print(f"✅ CSV generado con {len(df)} filas en: {output_file}")
