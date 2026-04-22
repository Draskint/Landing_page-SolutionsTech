# Draskint

Landing page para empresa de desarrollo web.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Estándar de Commits

Este proyecto usa **Husky** y **CommitLint** para enforces un estándar de commits.

### Formato de Commits

```
<tipo>(<alcance>): <descripción>

[ cuerpo opcional ]

[ pies opcional ]
```

### Tipos de Commit

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Documentación |
| `style` | Estilo (formateo, punto y coma, etc) |
| `refactor` | Refactorización de código |
| `perf` | Mejora de rendimiento |
| `test` | Tests |
| `build` | Build |
| `ci` | CI/CD |
| `chore` | Tareas de mantenimiento |
| `revert` | Revertir commit |

### Ejemplos

```bash
# Nueva funcionalidad
git commit -m "feat(hero): agregar animación de entrada"

# Corrección de bug
git commit -m "fix(form): corregir validación de email"

# Documentación
git commit -m "docs(readme): actualizar instrucciones de instalación"

# Refactorización
git commit -m "refactor(components): extraer utils compartido"
```

### Reglas

- El **tipo** es obligatorio y debe ser uno de los listados arriba
- La **descripción** es obligatoria y no puede estar vacía
- Máxima longitud del header: **72 caracteres**
- Usar tiempo verbal imperativo ("agregar" no "agregado")
- El alcance (scope) es opcional

### Validación

Los commits son validados automáticamente al hacer `git commit`. Si el commit no cumple el estándar, recibirá un error y deberá corregirlo.

```bash
# Incorrecto
git commit -m "agrego feature nueva"

# Correcto
git commit -m "feat(auth): agregar login con Google"
```
