# 🚀 Gestor de Servidores MCP

> **Interfaz visual elegante para gestionar servidores MCP (Model Context Protocol) en español**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge)](https://nachones.github.io/mcp-server-manager)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Español](https://img.shields.io/badge/Idioma-Español-red?style=for-the-badge)](#)
[![Mobirise Design](https://img.shields.io/badge/Diseño-Mobirise-purple?style=for-the-badge)](#)

## 🌟 Características Principales

- **🎨 Diseño Elegante**: Interfaz moderna inspirada en Mobirise con estilo gris/blanco sofisticado
- **🇪🇸 Completamente en Español**: Todos los textos y documentación en español
- **⚡ 18+ Servidores MCP**: Gestión de una amplia gama de servidores pre-configurados
- **🔧 Configuración Visual**: Activar/desactivar servidores con un solo clic
- **📋 Exportación Automática**: Genera automáticamente la configuración para Claude Desktop
- **💾 Persistencia Local**: Guarda automáticamente tus preferencias en localStorage
- **📱 Totalmente Responsivo**: Funciona perfectamente en desktop, tablet y móvil
- **🚀 Sin Dependencias**: Aplicación web pura (HTML5, CSS3, JavaScript ES6)

## 🖥️ Vista Previa

<div align="center">
  <img src="micopiloto1.PNG" alt="Vista previa de la aplicación" width="800px" style="border-radius: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.12);">
</div>

## 🛠️ Servidores MCP Incluidos

### 🔧 **Núcleo**
- **📁 Sistema de Archivos** - Gestión completa del sistema de archivos local
- **🧠 Memoria Persistente** - Sistema de memoria persistente para conversaciones

### 💻 **Desarrollo**
- **🔧 Control de Versiones Git** - Integración completa con repositorios Git
- **🐙 GitHub** - Gestión completa de repositorios GitHub

### 🌐 **Red y Búsqueda**
- **🌐 Cliente HTTP/Fetch** - Realizador de peticiones HTTP y descarga de contenido web
- **🔍 Búsqueda Universal** - Búsqueda avanzada en archivos y contenido
- **🦁 Búsqueda Brave** - Motor de búsqueda web privado y rápido

### 💾 **Bases de Datos**
- **🐘 PostgreSQL** - Gestión completa de bases de datos PostgreSQL
- **💾 SQLite** - Gestión de bases de datos SQLite ligeras

### ☁️ **Cloud y Comunicación**
- **☁️ Google Drive** - Integración completa con Google Drive
- **📧 Gmail** - Gestión de correo electrónico Gmail
- **💬 Slack** - Integración con plataforma de comunicación Slack

### 🤖 **IA y Automatización**
- **🧭 Pensamiento Secuencial** - Sistema de razonamiento paso a paso
- **🎭 Automatización Web** - Automatización de navegador web con Puppeteer

### 🏗️ **Infraestructura**
- **⚓ Kubernetes** - Orquestación y gestión de contenedores Kubernetes
- **🐋 Docker** - Gestión de contenedores y imágenes Docker
- **🚨 Monitoreo Sentry** - Monitoreo de errores y rendimiento de aplicaciones

### ⏰ **Utilidades**
- **⏰ Gestión de Tiempo** - Utilidades para fechas, horarios y zonas temporales

## 🚀 Inicio Rápido

### 🌐 **Opción 1: Uso Online (Recomendado)**

1. **Visita directamente**: [https://nachones.github.io/mcp-server-manager](https://nachones.github.io/mcp-server-manager)
2. **Selecciona los servidores** que deseas activar
3. **Exporta la configuración** haciendo clic en "📥 Exportar Configuración"
4. **Copia el archivo** `claude_desktop_config.json` a la ubicación correspondiente

### 💻 **Opción 2: Instalación Local**

```bash
# Clona el repositorio
git clone https://github.com/nachones/mcp-server-manager.git

# Entra en el directorio
cd mcp-server-manager

# Sirve la aplicación (opción 1: usando Python)
python -m http.server 3000

# Sirve la aplicación (opción 2: usando Node.js)
npx serve . -p 3000

# Abre en tu navegador
# http://localhost:3000
```

## ⚙️ Configuración de Claude Desktop

### 📁 **Ubicación del archivo de configuración:**

- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux**: `~/.config/claude/claude_desktop_config.json`

### 🔧 **Pasos de configuración:**

1. **Activa los servidores** que deseas usar en la interfaz web
2. **Haz clic en "📥 Exportar Configuración"** o "📋 Solo Activos"
3. **Copia el contenido** del archivo JSON generado
4. **Pega la configuración** en tu archivo `claude_desktop_config.json`
5. **Reinicia Claude Desktop** para aplicar los cambios

### 📝 **Ejemplo de configuración generada:**

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "node",
      "args": ["k:/servers/src/filesystem/index.ts"],
      "env": {}
    },
    "memory": {
      "command": "node", 
      "args": ["k:/servers/src/memory/index.ts"],
      "env": {}
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {}
    }
  }
}
```

## 🎨 Diseño y UX

### **Inspiración Mobirise**
- **Colores elegantes**: Fondo `#f5f5f5` con tarjetas blancas
- **Sombras sofisticadas**: `0 8px 15px -8px rgba(156, 156, 156, 0.3)`
- **Tipografía Inter**: Fuente moderna y legible
- **Iconos circulares**: Diseño consistente y atractivo
- **Animaciones suaves**: Transiciones fluidas y microinteracciones

### **Responsividad Completa**
- **Desktop**: Grid de 3-4 columnas
- **Tablet**: Grid de 2 columnas
- **Móvil**: Lista vertical optimizada

## 📂 Estructura del Proyecto

```
mcp-server-manager/
├── 📄 index.html          # Página principal
├── 📄 404.html            # Página de error personalizada
├── 📄 package.json        # Metadatos del proyecto
├── 📄 .htaccess           # Configuración Apache
├── 📁 css/
│   └── 📄 styles.css      # Estilos principales con tema Mobirise
├── 📁 js/
│   └── 📄 app.js          # Lógica de la aplicación
├── 📁 docs/
│   ├── 📄 api.md          # Documentación de la API
│   └── 📄 setup.md        # Guía de configuración detallada
└── 📁 assets/
    └── 🖼️ screenshots/    # Capturas de pantalla
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### 🐛 **Reportar Issues**

- Usa el [sistema de issues de GitHub](https://github.com/nachones/mcp-server-manager/issues)
- Proporciona detalles del navegador y sistema operativo
- Incluye capturas de pantalla si es posible

## 📋 **Roadmap**

- [ ] 🌙 **Modo oscuro** completo
- [ ] 🔍 **Filtros por categoría** mejorados  
- [ ] 📊 **Estadísticas de uso** de servidores
- [ ] 🔄 **Sincronización con GitHub** para configuraciones
- [ ] 🌐 **Soporte multiidioma** (inglés, portugués)
- [ ] 📱 **PWA** (Progressive Web App) con instalación offline
- [ ] 🧪 **Testing automático** con Jest
- [ ] 📖 **Documentación interactiva** de cada servidor

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Micopiloto.es**
- 🌐 Website: [https://micopiloto.es](https://micopiloto.es)
- 📧 Email: nachones@me.com
- 🐙 GitHub: [@nachones](https://github.com/nachones)

## 🙏 Agradecimientos

- **Anthropic** por crear Claude y el protocolo MCP
- **Mobirise** por la inspiración de diseño
- **Comunidad MCP** por los servidores y documentación
- **Google Fonts** por la tipografía Inter

---

<div align="center">
  <p><strong>⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! ⭐</strong></p>
  <p>Hecho con ❤️ para la comunidad hispanohablante de IA</p>
</div>