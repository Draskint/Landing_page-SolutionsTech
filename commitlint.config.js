export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva funcionalidad
        'fix',      // Corrección de bug
        'docs',     // Documentación
        'style',    // Estilo (formateo, punto y coma, etc)
        'refactor', // Refactorización
        'perf',     // Mejora de rendimiento
        'test',     // Tests
        'build',    // Build
        'ci',       // CI/CD
        'chore',    // Tareas de mantenimiento
        'revert'    // Revertir commit
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  }
}