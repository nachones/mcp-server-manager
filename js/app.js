/**
 * Gestor de Servidores MCP - Aplicación Principal
 * Gestiona la configuración y activación de servidores MCP
 * @author Micopiloto.es
 * @version 1.0.0
 */

class MCPServerManager {
    constructor() {
        this.servers = {
            filesystem: {
                name: 'Sistema de Archivos',
                description: 'Gestión completa del sistema de archivos local',
                command: 'node',
                args: ['k:/servers/src/filesystem/index.ts'],
                icon: '📁',
                active: false,
                category: 'core'
            },
            memory: {
                name: 'Memoria Persistente',
                description: 'Sistema de memoria persistente para conversaciones',
                command: 'node',
                args: ['k:/servers/src/memory/index.ts'],
                icon: '🧠',
                active: false,
                category: 'core'
            },
            git: {
                name: 'Control de Versiones Git',
                description: 'Integración completa con repositorios Git',
                command: 'uvx',
                args: ['mcp-server-git', '--repository', 'k:/servers'],
                icon: '🔧',
                active: false,
                category: 'development'
            },
            fetch: {
                name: 'Cliente HTTP/Fetch',
                description: 'Realizador de peticiones HTTP y descarga de contenido web',
                command: 'uvx',
                args: ['mcp-server-fetch'],
                icon: '🌐',
                active: false,
                category: 'network'
            },
            time: {
                name: 'Gestión de Tiempo',
                description: 'Utilidades para fechas, horarios y zonas temporales',
                command: 'uvx',
                args: ['mcp-server-time'],
                icon: '⏰',
                active: false,
                category: 'utility'
            },
            sequential: {
                name: 'Pensamiento Secuencial',
                description: 'Sistema de razonamiento paso a paso',
                command: 'node',
                args: ['k:/servers/src/sequentialthinking/index.ts'],
                icon: '🧭',
                active: false,
                category: 'ai'
            },
            everything: {
                name: 'Búsqueda Universal',
                description: 'Búsqueda avanzada en archivos y contenido',
                command: 'node',
                args: ['k:/servers/src/everything/index.ts'],
                icon: '🔍',
                active: false,
                category: 'search'
            },
            brave: {
                name: 'Búsqueda Brave',
                description: 'Motor de búsqueda web privado y rápido',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-brave-search'],
                icon: '🦁',
                active: false,
                category: 'search'
            },
            postgres: {
                name: 'Base de Datos PostgreSQL',
                description: 'Gestión completa de bases de datos PostgreSQL',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-postgres'],
                icon: '🐘',
                active: false,
                category: 'database'
            },
            sqlite: {
                name: 'Base de Datos SQLite',
                description: 'Gestión de bases de datos SQLite ligeras',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-sqlite'],
                icon: '💾',
                active: false,
                category: 'database'
            },
            gdrive: {
                name: 'Google Drive',
                description: 'Integración completa con Google Drive',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-google-drive'],
                icon: '☁️',
                active: false,
                category: 'cloud'
            },
            gmail: {
                name: 'Gmail',
                description: 'Gestión de correo electrónico Gmail',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-gmail'],
                icon: '📧',
                active: false,
                category: 'communication'
            },
            slack: {
                name: 'Slack',
                description: 'Integración con plataforma de comunicación Slack',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-slack'],
                icon: '💬',
                active: false,
                category: 'communication'
            },
            github: {
                name: 'GitHub',
                description: 'Gestión completa de repositorios GitHub',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-github'],
                icon: '🐙',
                active: false,
                category: 'development'
            },
            puppeteer: {
                name: 'Automatización Web',
                description: 'Automatización de navegador web con Puppeteer',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-puppeteer'],
                icon: '🎭',
                active: false,
                category: 'automation'
            },
            sentry: {
                name: 'Monitoreo Sentry',
                description: 'Monitoreo de errores y rendimiento de aplicaciones',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-sentry'],
                icon: '🚨',
                active: false,
                category: 'monitoring'
            },
            kubernetes: {
                name: 'Kubernetes',
                description: 'Orquestación y gestión de contenedores Kubernetes',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-kubernetes'],
                icon: '⚓',
                active: false,
                category: 'infrastructure'
            },
            docker: {
                name: 'Docker',
                description: 'Gestión de contenedores y imágenes Docker',
                command: 'npx',
                args: ['-y', '@modelcontextprotocol/server-docker'],
                icon: '🐋',
                active: false,
                category: 'infrastructure'
            }
        };
        
        this.categories = {
            core: { name: 'Núcleo', icon: '⚡' },
            development: { name: 'Desarrollo', icon: '💻' },
            network: { name: 'Red', icon: '🌐' },
            utility: { name: 'Utilidades', icon: '🛠️' },
            ai: { name: 'Inteligencia Artificial', icon: '🤖' },
            search: { name: 'Búsqueda', icon: '🔍' },
            database: { name: 'Bases de Datos', icon: '💾' },
            cloud: { name: 'Cloud', icon: '☁️' },
            communication: { name: 'Comunicación', icon: '📱' },
            automation: { name: 'Automatización', icon: '🔄' },
            monitoring: { name: 'Monitoreo', icon: '📊' },
            infrastructure: { name: 'Infraestructura', icon: '🏗️' }
        };
        
        this.loadSettings();
        this.init();
    }

    init() {
        this.renderServers();
        this.attachEventListeners();
        this.updateStats();
        this.loadGoogleFonts();
    }

    loadGoogleFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }

    loadSettings() {
        const saved = localStorage.getItem('mcp-servers-config');
        if (saved) {
            try {
                const config = JSON.parse(saved);
                Object.keys(config).forEach(key => {
                    if (this.servers[key]) {
                        this.servers[key].active = config[key].active || false;
                    }
                });
            } catch (error) {
                // Error loading saved configuration
            }
        }
    }

    saveSettings() {
        const config = {};
        Object.keys(this.servers).forEach(key => {
            config[key] = { active: this.servers[key].active };
        });
        localStorage.setItem('mcp-servers-config', JSON.stringify(config));
    }

    renderServers() {
        const grid = document.getElementById('serversGrid');
        if (!grid) return;

        grid.innerHTML = '';
        
        Object.entries(this.servers).forEach(([key, server]) => {
            const card = this.createServerCard(key, server);
            grid.appendChild(card);
        });
    }

    createServerCard(key, server) {
        const card = document.createElement('div');
        card.className = `server-card ${server.active ? 'active' : ''}`;
        
        const categoryInfo = this.categories[server.category] || { name: 'General', icon: '📦' };
        
        card.innerHTML = `
            <div class="server-header">
                <div class="server-icon">${server.icon}</div>
                <div class="server-info">
                    <h3>${server.name}</h3>
                    <p>${server.description}</p>
                    <span class="status ${server.active ? 'active' : 'inactive'}">
                        ${server.active ? 'Activo' : 'Inactivo'}
                    </span>
                </div>
            </div>
            <div class="server-meta">
                <small>${categoryInfo.icon} ${categoryInfo.name}</small>
            </div>
            <div class="server-actions">
                <button class="btn ${server.active ? 'btn-success' : 'btn-primary'}" 
                        onclick="mcpManager.toggleServer('${key}')">
                    ${server.active ? '✓ Activado' : '▶ Activar'}
                </button>
                <button class="btn btn-secondary" onclick="mcpManager.showConfig('${key}')">
                    ⚙ Config
                </button>
            </div>
        `;
        
        return card;
    }

    toggleServer(serverId) {
        if (!this.servers[serverId]) return;
        
        this.servers[serverId].active = !this.servers[serverId].active;
        this.saveSettings();
        this.renderServers();
        this.updateStats();
        
        // Mostrar notificación
        this.showNotification(
            `${this.servers[serverId].name} ${this.servers[serverId].active ? 'activado' : 'desactivado'}`,
            this.servers[serverId].active ? 'success' : 'info'
        );
    }

    showConfig(serverId) {
        const server = this.servers[serverId];
        if (!server) return;

        const modal = document.getElementById('configModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('configContent');
        
        if (!modal || !title || !content) return;

        title.textContent = `Configuración: ${server.name}`;
        
        const config = {
            mcpServers: {
                [serverId]: {
                    command: server.command,
                    args: server.args,
                    env: server.env || {}
                }
            }
        };

        content.innerHTML = `
            <div class="config-section">
                <h4>Configuración JSON para Claude Desktop:</h4>
                <pre><code>${JSON.stringify(config, null, 2)}</code></pre>
                <p><strong>Ubicación del archivo:</strong></p>
                <p><code>%APPDATA%\\Claude\\claude_desktop_config.json</code> (Windows)</p>
                <p><code>~/Library/Application Support/Claude/claude_desktop_config.json</code> (macOS)</p>
                <p><code>~/.config/claude/claude_desktop_config.json</code> (Linux)</p>
            </div>
            <div class="config-section">
                <h4>Información del servidor:</h4>
                <ul>
                    <li><strong>Categoría:</strong> ${this.categories[server.category]?.name || 'General'}</li>
                    <li><strong>Comando:</strong> ${server.command}</li>
                    <li><strong>Argumentos:</strong> ${server.args.join(' ')}</li>
                    <li><strong>Estado:</strong> ${server.active ? 'Activo' : 'Inactivo'}</li>
                </ul>
            </div>
        `;

        modal.style.display = 'block';
    }

    exportConfig() {
        const activeServers = {};
        
        Object.entries(this.servers).forEach(([key, server]) => {
            if (server.active) {
                activeServers[key] = {
                    command: server.command,
                    args: server.args,
                    env: server.env || {}
                };
            }
        });

        const config = { mcpServers: activeServers };
        
        const blob = new Blob([JSON.stringify(config, null, 2)], { 
            type: 'application/json' 
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'claude_desktop_config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Configuración exportada correctamente', 'success');
    }

    exportActiveOnly() {
        const activeServers = Object.entries(this.servers)
            .filter(([_, server]) => server.active)
            .reduce((acc, [key, server]) => {
                acc[key] = {
                    command: server.command,
                    args: server.args,
                    env: server.env || {}
                };
                return acc;
            }, {});

        const config = { mcpServers: activeServers };
        
        const modal = document.getElementById('configModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('configContent');
        
        title.textContent = 'Configuración de Servidores Activos';
        content.innerHTML = `
            <div class="config-section">
                <h4>Configuración JSON para Claude Desktop:</h4>
                <pre><code>${JSON.stringify(config, null, 2)}</code></pre>
                <button class="btn btn-primary" onclick="mcpManager.copyToClipboard('${JSON.stringify(config).replace(/"/g, '\\"')}')">
                    📋 Copiar al Portapapeles
                </button>
            </div>
        `;
        
        modal.style.display = 'block';
    }

    async copyToClipboard(text) {
        try {
            const parsedText = JSON.parse(text.replace(/\\"/g, '"'));
            await navigator.clipboard.writeText(JSON.stringify(parsedText, null, 2));
            this.showNotification('Configuración copiada al portapapeles', 'success');
        } catch (error) {
            this.showNotification('Error al copiar la configuración', 'error');
        }
    }

    activateAll() {
        Object.keys(this.servers).forEach(key => {
            this.servers[key].active = true;
        });
        this.saveSettings();
        this.renderServers();
        this.updateStats();
        this.showNotification('Todos los servidores activados', 'success');
    }

    deactivateAll() {
        Object.keys(this.servers).forEach(key => {
            this.servers[key].active = false;
        });
        this.saveSettings();
        this.renderServers();
        this.updateStats();
        this.showNotification('Todos los servidores desactivados', 'info');
    }

    filterByCategory(category) {
        const cards = document.querySelectorAll('.server-card');
        cards.forEach(card => {
            const serverId = card.querySelector('[onclick*="toggleServer"]')?.onclick.toString().match(/'([^']+)'/)?.[1];
            if (serverId && this.servers[serverId]) {
                if (category === 'all' || this.servers[serverId].category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    updateStats() {
        const activeCount = Object.values(this.servers).filter(s => s.active).length;
        const totalCount = Object.keys(this.servers).length;
        
        const statsElement = document.getElementById('serverStats');
        if (statsElement) {
            statsElement.innerHTML = `
                <span class="stat-item">
                    <strong>${activeCount}</strong> activos de <strong>${totalCount}</strong> disponibles
                </span>
            `;
        }
    }

    showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">
                    ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
                </span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        // Estilos inline para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            border-left: 4px solid ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            max-width: 400px;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    attachEventListeners() {
        // Cerrar modal
        const modal = document.getElementById('configModal');
        const closeBtn = document.getElementsByClassName('close')[0];
        
        if (closeBtn) {
            closeBtn.onclick = () => {
                if (modal) modal.style.display = 'none';
            };
        }
        
        if (modal) {
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }

        // Botones de acción global
        const exportBtn = document.getElementById('exportConfig');
        const exportActiveBtn = document.getElementById('exportActive');
        const activateAllBtn = document.getElementById('activateAll');
        const deactivateAllBtn = document.getElementById('deactivateAll');

        if (exportBtn) exportBtn.onclick = () => this.exportConfig();
        if (exportActiveBtn) exportActiveBtn.onclick = () => this.exportActiveOnly();
        if (activateAllBtn) activateAllBtn.onclick = () => this.activateAll();
        if (deactivateAllBtn) deactivateAllBtn.onclick = () => this.deactivateAll();
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.mcpManager = new MCPServerManager();
});

// Función global para compatibilidad con onclick en HTML
function toggleServer(serverId) {
    if (window.mcpManager) {
        window.mcpManager.toggleServer(serverId);
    }
}

function showConfig(serverId) {
    if (window.mcpManager) {
        window.mcpManager.showConfig(serverId);
    }
}