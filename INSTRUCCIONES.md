# 💍 Invitación de Boda — Bryan & Stefany v4
## Instrucciones completas paso a paso

---

## 📁 ESTRUCTURA DE ARCHIVOS

```
boda-v4/
├── index.html              ← La página principal (no tocar)
├── invitados.html          ← Herramienta para generar links personalizados
├── css/
│   └── style.css           ← Diseño visual (no tocar)
├── js/
│   ├── config.js           ← ✅ AQUÍ cambias todos los textos y datos
│   └── main.js             ← Código de funciones (no tocar)
├── img/
│   ├── video-intro.mp4     ← Video de intro (reemplaza con el tuyo)
│   ├── hero.jpg            ← Foto principal del inicio
│   ├── preboda1.png        ← Fotos de preboda (reemplaza con las tuyas)
│   ├── preboda2.jpg ~ preboda7.JPG
│   ├── preboda12.JPG       ← Foto sección de confirmación
│   ├── footer.JPG          ← Foto del pie de página
│   └── sobre.png           ← Imagen del sobre (decorativa)
├── audio/
│   ├── musica.mp3          ← ✅ Pon aquí tu música de fondo
│   └── mensaje.mp3         ← ✅ Pon aquí el mensaje de voz grabado
└── INSTRUCCIONES.md        ← Este archivo
```

---

## 🚀 PARTE 1 — SUBIR A GITHUB PAGES
### Solo se hace una vez

### Paso 1 — Crear el repositorio en GitHub
1. Ve a **github.com** e inicia sesión con tu cuenta `B.colindres`
2. Haz clic en el botón verde **"New"** (arriba a la izquierda)
3. En "Repository name" escribe: `boda`
4. Selecciona **"Public"**
5. NO marques ninguna casilla adicional
6. Haz clic en **"Create repository"**

### Paso 2 — Subir los archivos
1. En tu nuevo repositorio, haz clic en **"uploading an existing file"**
2. Abre la carpeta `boda-v4` en tu computadora
3. Selecciona TODOS los archivos y carpetas → arrástralos a la zona de carga en GitHub
4. Espera que suban todos (puede tomar unos minutos por las fotos)
5. En la caja que dice "Commit changes" escribe: `Subir invitación de boda`
6. Haz clic en el botón verde **"Commit changes"**

### Paso 3 — Activar GitHub Pages
1. En tu repositorio, haz clic en **"Settings"** (ícono de rueda, arriba a la derecha)
2. En el menú de la izquierda busca y haz clic en **"Pages"**
3. En "Source" selecciona **"Deploy from a branch"**
4. En "Branch" selecciona **"main"** y en la carpeta selecciona **"/ (root)"**
5. Haz clic en **"Save"**
6. Espera 2-3 minutos
7. Aparecerá tu URL: **`https://b.colindres.github.io/boda/`**

¡Esa es la URL que compartes! 🎉

---

## ✏️ PARTE 2 — CÓMO CAMBIAR TEXTOS
### (Editar el archivo config.js)

El archivo `js/config.js` tiene TODOS los textos de la invitación.
Para cambiarlo en GitHub:

1. Ve a tu repositorio en GitHub
2. Haz clic en la carpeta `js/`
3. Haz clic en `config.js`
4. Haz clic en el ícono del **lápiz ✏️** (arriba a la derecha del contenido)
5. Busca el texto que quieres cambiar y edítalo
6. Haz clic en **"Commit changes"** → **"Commit changes"** de nuevo
7. En 1-2 minutos la página se actualiza sola

### Textos que puedes cambiar en config.js:
- ✅ Nombres de los novios
- ✅ Fecha, hora y lugar
- ✅ Versículo o frase bíblica
- ✅ Mensaje de la invitación personal (el que aparece en confirmación)
- ✅ Texto del código de vestimenta
- ✅ **Link de Pinterest** → busca `pinterestUrl` y pega tu link
- ✅ Texto del regalo en efectivo
- ✅ Instrucciones (hora de llegada, vestimenta, etc.)
- ✅ Textos de la historia entre fotos
- ✅ Frases de la línea de tiempo y fechas
- ✅ Frase del pie de página
- ✅ Número de WhatsApp
- ✅ Colores de la invitación

---

## 📸 PARTE 3 — CAMBIAR FOTOS

### Cómo reemplazar una foto:
1. Ve a tu repositorio en GitHub
2. Haz clic en la carpeta `img/`
3. Haz clic en **"Add file"** → **"Upload files"**
4. Sube tu foto nueva con el **MISMO NOMBRE** que la que quieres reemplazar
   - Ejemplo: si quieres cambiar `preboda3.jpg`, sube una foto nueva llamada `preboda3.jpg`
5. GitHub reemplaza la foto automáticamente
6. Haz clic en **"Commit changes"**

### Nombres de fotos y dónde aparecen:
| Archivo         | Dónde aparece                              |
|----------------|---------------------------------------------|
| `hero.jpg`     | Pantalla principal de la invitación         |
| `preboda1.png` | Junto al versículo + línea de tiempo evento 1 |
| `preboda2.jpg` | Sección del lugar + línea de tiempo evento 3 |
| `preboda3.jpg` | Historia bloque 1 + sección del lugar       |
| `preboda4.jpg` | Historia bloque 2 + línea de tiempo evento 4 |
| `preboda5.JPG` | Historia bloque 3 + línea de tiempo evento 5 |
| `preboda6.JPG` | Historia bloque 3 alt + línea de tiempo evento 6 |
| `preboda7.JPG` | Línea de tiempo evento 7                    |
| `preboda12.JPG`| Sección de confirmación                     |
| `footer.JPG`   | Pie de página                               |
| `video-intro.mp4` | Video de introducción al inicio          |

### Para agregar fotos a la línea de tiempo:
1. Sube la foto nueva a la carpeta `img/` (ej: `preboda8.jpg`)
2. Edita `config.js` → busca la sección `timeline:`
3. En el evento que quieras, cambia `foto:""` por `foto:"img/preboda8.jpg"`

---

## 🎵 PARTE 4 — AGREGAR AUDIOS

### Música de fondo:
1. Consigue un archivo de música en formato **MP3**
2. Nómbralo exactamente: `musica.mp3`
3. Súbelo a la carpeta `audio/` en GitHub
4. La música empezará suavemente después del video

### Mensaje de voz (de ustedes dos):
1. Graben el mensaje en su celular
2. Conviértanlo a MP3 si no lo es (usa cloudconvert.com, es gratis)
3. Nómbralo exactamente: `mensaje.mp3`
4. Súbelo a la carpeta `audio/` en GitHub

---

## 💌 PARTE 5 — INVITACIONES PERSONALIZADAS
### Cómo mandar la invitación con el nombre de cada persona

1. Abre el archivo `invitados.html` en tu navegador
   (doble clic en el archivo → se abre en Chrome/Safari)
2. En "URL base" escribe tu URL de GitHub Pages:
   `https://b.colindres.github.io/boda/`
3. Escribe la lista de invitados (un nombre por línea):
   ```
   María López
   Carlos y Ana Rodríguez
   Familia Martínez
   ```
4. Haz clic en **"Generar enlaces"**
5. Para cada invitado aparece un botón **WhatsApp** → haz clic
6. Se abre WhatsApp con el mensaje ya escrito y el link personalizado
7. Solo envía 📤

### ¿Qué ve el invitado?
Cuando abre su link personalizado, en la sección de confirmación verá:
> *"Esta invitación es personal e intransferible.*
> *Ha sido enviada especialmente para:*
> **María López**"

---

## 📷 PARTE 6 — CLOUDINARY (fotos en libro de firmas)

Para que los invitados puedan subir fotos en el libro de firmas:

1. Ve a **cloudinary.com** y crea una cuenta gratis
2. En el Dashboard copia tu **Cloud Name** (algo como `dxxxxxxxx`)
3. Ve a **Settings** → **Upload** → haz clic en **"Add upload preset"**
4. En "Signing Mode" selecciona **"Unsigned"**
5. Copia el nombre del preset (algo como `ml_default`)
6. Abre `config.js` en GitHub y busca:
   ```
   cloudinary: {
     cloudName:    "TU_CLOUD_NAME",
     uploadPreset: "TU_UPLOAD_PRESET"
   }
   ```
7. Reemplaza `TU_CLOUD_NAME` con tu Cloud Name
8. Reemplaza `TU_UPLOAD_PRESET` con el nombre de tu preset
9. Guarda los cambios

---

## 📋 PARTE 7 — AIRTABLE (guardar firmas permanentemente)

Para que las firmas del libro se guarden para siempre y las puedas ver:

1. Ve a **airtable.com** y crea una cuenta con `bryan300d@gmail.com`
2. Haz clic en **"+ Add a base"** → **"Start from scratch"**
3. Nómbrala `Boda Bryan & Stefany`
4. Crea una tabla llamada **`Firmas`** con estas columnas:
   - `Nombre` (tipo: Single line text)
   - `Mensaje` (tipo: Long text)
   - `Emoji` (tipo: Single line text)
   - `FotoUrl` (tipo: URL)
   - `EsPublico` (tipo: Checkbox)
   - `Fecha` (tipo: Single line text)
5. Para obtener el API Key:
   - Ve a **airtable.com/account**
   - Haz clic en **"Developer Hub"** → **"Personal access tokens"**
   - Crea un token con permisos `data.records:write` y `data.records:read`
   - Copia el token
6. Para obtener el Base ID:
   - En tu base, ve a **Help** → **API documentation**
   - El Base ID empieza con `app` (ejemplo: `appXXXXXXXX`)
7. Abre `config.js` y llena:
   ```
   airtable: {
     apiKey:  "tu_token_aqui",
     baseId:  "appXXXXXXXX",
     tableId: "Firmas"
   }
   ```

---

## 🔑 CONTRASEÑA DEL PANEL DE ADMINISTRACIÓN
`bodadanieljissel`

Para abrir el panel: **3 clics en la esquina inferior derecha** de la página

---

## ❓ PREGUNTAS FRECUENTES

**¿La invitación funciona en celular?**
Sí, está diseñada primero para celular.

**¿El video se ve en todos los celulares?**
Sí, formato MP4. Si el video es muy pesado (más de 20MB) puede tardar en cargar en conexiones lentas. Recomendamos comprimir el video en **handbrake.fr** (gratis).

**¿Puedo cambiar el video más adelante?**
Sí. Sube el nuevo video a la carpeta `img/` con el nombre `video-intro.mp4` y reemplaza el anterior.

**¿Puedo usar un dominio propio?**
Sí. En Settings → Pages → Custom domain puedes agregar `bodabryanstefany.com` o similar. El dominio cuesta ~$12 USD/año en namecheap.com.

**¿Qué pasa si alguien entra sin link personalizado?**
Ve la invitación normal sin el mensaje personalizado en la sección de confirmación.

**¿Las firmas del libro se pierden si alguien borra el caché?**
Las firmas locales sí. Por eso recomendamos configurar Airtable para guardarlas de forma permanente.

---

## 📞 URL FINAL DEL SITIO
`https://b.colindres.github.io/boda/`

*Disponible 2-3 minutos después de activar GitHub Pages*

---

*Instrucciones preparadas para: Bryan Daniel Colindres Mejia & Stefany Jissel Herrera Flores · 03.10.2026*
