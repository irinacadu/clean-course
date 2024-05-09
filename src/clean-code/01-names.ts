(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const files = [
        { id: 1, file: false },
        { id: 2, file: false },
        { id: 3, file: true },
        { id: 4, file: false },
        { id: 5, file: false },
        { id: 7, file: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = files.map( file => file.id );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory = 33;
    
    // primer nombre - first name
    const name = 'Fernando';
    
    // primer apellido - last name
    const surname = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const mxClassPerStudent = 6;


})();