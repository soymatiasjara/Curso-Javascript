// Método 1 - Named Imports
import { nombre as nombreImportado, obtenerPosts as postsImportado} from './nameExport';
console.log('Mi nombre es ' + nombreImportado);
console.log(postsImportado());

// Método 2 - Namespace Imports
import * as datos from './nameExport';
console.log(datos.nombre2);
console.log(datos.obtenerPosts2());

// Método 3 - Default Imports, usar este método solo si quieres exportar solo una cosa de un archivo.
import obtenerUsuario from './defaultExport';
console.log(obtenerUsuario());

// Método 4 - Empty Imports
import './emptyExport';