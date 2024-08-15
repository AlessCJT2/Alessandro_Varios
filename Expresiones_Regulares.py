import re
import pandas as  pd
from PyPDF2 import PdfReader

acceso_archivo = "Leer_libro.pdf"

archivo = PdfReader(acceso_archivo)
pagina = documento.pages[2]

texto = pagina.extract_text()

texto.split("\n")

patron = r"\n(\w+\s*\w+\s*\w*)\s+(\d+)\s+(\d+.\d+)\s+(\d+)\s+(\d+.\d+)"
datos = re.findall(patron, texto)

etas = pd.DataFrame(datos, columns=["Area de salud", "Casos 2017", "Tasas 2017", "Casos 2018", "Tasas 2018"])

etas["Casos 2017"] = etas['Casos 2017'].astype('int64')
etas["Casos 2018"] = etas['Casos 2018'].astype('int64')
etas["Tasas 2017"] = etas['Tasas 2017'].astype('float64')
etas["Tasas 2018"] = etas['Tasas 2018'].astype('float64')

pagina_C2 = archivo.pages[3]

texto_C2 = pagina_C2.extract_text()


patron_C2 = r"(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+%\s+\(+\d+/+\d+\))"

datos_C2 = re.findall(patron_C2, texto_C2)

tabla_2 = pd.DataFrame(datos_C2, columns=["Año", "Reportados", "Investigados", "Informados", "% Noticacion DAS"])
print(tabla_2)

tabla_2["Año"] = tabla_2['Año'].astype('int64')
tabla_2["Reportados"] = tabla_2['Reportados'].astype('int64')
tabla_2["Informados"] = tabla_2['Informados'].astype('int64')
tabla_2["Investigados"] = tabla_2['Investigados'].astype('int64')

print("\n*********** Fin de la tabla 2 ***********\n")

pagina_C3 = archivo.pages[4]

texto_C3 = pagina_C3.extract_text()
texto_C3 = re.sub(r"\s*\n\s*", " ", texto_C3).replace("/","")

patron_C3 = r"(\d+)\s+(\d+)\s+([^\d]+?)\s+([^\d-]+?)\s+([^\d]+?)\s+(\d+)"


datos_C3 = re.findall(patron_C3, texto_C3)


tabla_3 = pd.DataFrame(datos_C3, columns=["No.", "SE", "Area de Salud", "ETA reportada", "Fuente de contagio", "No. de casos"])


with open('tabla_completa.txt', 'w', encoding='utf-8') as file:
    file.write(f"{'No.':<5} {'SE':<5} {'Area de Salud':<40} {'ETA reportada':<30} {'Fuente de contagio':<40} {'No. de casos':<10}\n")
    file.write('-' * 125 + '\n')  # Línea divisoria
    
    for index, row in tabla_3.iterrows():
        file.write(f"{row['No.']:<5} {row['SE']:<5} {row['Area de Salud']:<40} {row['ETA reportada']:<30} {row['Fuente de contagio']:<40} {row['No. de casos']:<10}\n")

print("El archivo 'tabla_completa.txt' ha sido creado exitosamente.")

print(tabla_3)

tabla_3["No."] = tabla_3['No.'].astype('int64')
tabla_3["SE"] = tabla_3['SE'].astype('int64')
tabla_3["No. de casos"] = tabla_3['No. de casos'].astype('int64')

print("\n", tabla_3.dtypes)
print("\n*********** Fin de la tabla 3 ***********\n")

#Alessandro Tzunun Tax - 1524723