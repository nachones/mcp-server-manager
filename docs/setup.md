# 🛠️ Guía de Configuración Detallada

## 📋 Prerrequisitos

### **Para Usuarios (Solo usar la interfaz web)**
- ✅ Navegador web moderno (Chrome, Firefox, Safari, Edge)
- ✅ Claude Desktop instalado
- ✅ Conexión a internet

### **Para Desarrolladores (Instalación local)**
- ✅ Node.js 14+ y npm 6+
- ✅ Python 3.6+ (opcional, para servidor local)
- ✅ Git

## 🚀 Instalación Paso a Paso

### **Método 1: Uso Online Directo**

1. **Accede a la aplicación web**:
   ```
   https://nachones.github.io/mcp-server-manager
   ```

2. **Selecciona tus servidores favoritos**:
   - Haz clic en "▶ Activar" en cada servidor que desees usar
   - Los servidores activos se marcarán con "✓ Activado"

3. **Exporta la configuración**:
   - Opción A: "📥 Exportar Configuración" (descarga archivo JSON)
   - Opción B: "📋 Solo Activos" (copia al portapapeles)

### **Método 2: Instalación Local**

```bash
# 1. Clona el repositorio
git clone https://github.com/nachones/mcp-server-manager.git
cd mcp-server-manager

# 2. Instala dependencias (opcional, solo para desarrollo)
npm install

# 3. Sirve la aplicación localmente
# Opción A: Con Node.js
npx serve . -p 3000

# Opción B: Con Python
python -m http.server 3000

# Opción C: Con PHP (si está instalado)
php -S localhost:3000

# 4. Abre en tu navegador
# http://localhost:3000
```

## ⚙️ Configuración de Claude Desktop

### **Ubicaciones del archivo de configuración**

| Sistema Operativo | Ruta del archivo |
|-------------------|------------------|
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |
| **macOS** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Linux** | `~/.config/claude/claude_desktop_config.json` |

### **Pasos detallados para Windows**

1. **Abrir el Explorador de archivos**
2. **Ir a la barra de direcciones** y escribir: `%APPDATA%\Claude`
3. **Buscar o crear** el archivo `claude_desktop_config.json`
4. **Abrir el archivo** con tu editor favorito (Notepad++, VS Code, etc.)
5. **Pegar la configuración** exportada desde la aplicación
6. **Guardar el archivo**
7. **Reiniciar Claude Desktop**

### **Pasos detallados para macOS**

1. **Abrir Finder**
2. **Presionar** `Cmd + Shift + G`
3. **Escribir la ruta**: `~/Library/Application Support/Claude`
4. **Buscar o crear** el archivo `claude_desktop_config.json`
5. **Abrir con TextEdit** o tu editor preferido
6. **Pegar la configuración** y guardar
7. **Reiniciar Claude Desktop**

### **Pasos detallados para Linux**

```bash
# 1. Crear el directorio si no existe
mkdir -p ~/.config/claude

# 2. Editar o crear el archivo de configuración
nano ~/.config/claude/claude_desktop_config.json

# 3. Pegar la configuración exportada
# 4. Guardar (Ctrl+X, Y, Enter en nano)

# 5. Reiniciar Claude Desktop
```

## 🔧 Configuración Avanzada

### **Personalizar rutas de servidores**

Si tienes tus servidores MCP en ubicaciones diferentes, puedes personalizar las rutas:

1. **Abre la consola del navegador** (F12)
2. **Modifica las rutas** en el objeto `servers`:

```javascript
// Ejemplo: cambiar la ruta del servidor filesystem
mcpManager.servers.filesystem.args = ['C:/mi-ruta-personalizada/filesystem/index.js'];
```

### **Configuración de variables de entorno**

Algunos servidores requieren variables de entorno. Ejemplo:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "tu_token_aqui"
      }
    }
  }
}
```

### **Configurar múltiples instancias del mismo servidor**

```json
{
  "mcpServers": {
    "filesystem-home": {
      "command": "node",
      "args": ["k:/servers/src/filesystem/index.ts", "--root", "C:/Users/Usuario"],
      "env": {}
    },
    "filesystem-projects": {
      "command": "node", 
      "args": ["k:/servers/src/filesystem/index.ts", "--root", "C:/Projects"],
      "env": {}
    }
  }
}
```

## 🔍 Solución de Problemas

### **Problema: Claude no reconoce los servidores**

**Posibles soluciones:**
1. ✅ Verificar que el archivo JSON esté bien formateado
2. ✅ Comprobar que la ruta del archivo sea correcta
3. ✅ Reiniciar Claude Desktop completamente
4. ✅ Verificar que los servidores MCP estén instalados

### **Problema: Servidor MCP no funciona**

**Posibles soluciones:**
1. ✅ Verificar que Node.js esté instalado (`node --version`)
2. ✅ Verificar que las rutas de los archivos existan
3. ✅ Comprobar los logs de Claude Desktop
4. ✅ Instalar dependencias faltantes (`npm install`)

### **Problema: La aplicación web no carga**

**Posibles soluciones:**
1. ✅ Verificar conexión a internet
2. ✅ Limpiar caché del navegador
3. ✅ Intentar con otro navegador
4. ✅ Usar modo incógnito/privado

### **Problema: No se puede descargar la configuración**

**Posibles soluciones:**
1. ✅ Permitir descargas en el navegador
2. ✅ Verificar bloqueadores de pop-ups
3. ✅ Usar "📋 Solo Activos" para copiar manualmente

## 📱 Uso en Dispositivos Móviles

La aplicación es completamente responsiva y funciona en:

- 📱 **Smartphones** (iOS Safari, Android Chrome)
- 📱 **Tablets** (iPad Safari, Android tablets)
- 💻 **Dispositivos híbridos** (Surface, Chromebooks)

### **Características móviles:**
- ✅ Interfaz táctil optimizada
- ✅ Botones de tamaño adecuado
- ✅ Scroll suave
- ✅ Modal responsivo para configuración

## 🔄 Actualizaciones

### **Automáticas (Uso online)**
- La aplicación web se actualiza automáticamente
- No requiere acción del usuario
- Siempre la última versión disponible

### **Manuales (Instalación local)**
```bash
# Actualizar el repositorio local
git pull origin main

# Limpiar caché del navegador
# Recargar la página (Ctrl+F5)
```

## 🆘 Soporte

¿Necesitas ayuda? Puedes:

1. **📖 Consultar la documentación**: Esta guía y el README principal
2. **🐛 Reportar problemas**: [GitHub Issues](https://github.com/nachones/mcp-server-manager/issues)
3. **💬 Preguntar en la comunidad**: Discusiones del repositorio
4. **📧 Contacto directo**: nachones@me.com

---

> **💡 Tip**: Guarda esta página en favoritos para consultas futuras