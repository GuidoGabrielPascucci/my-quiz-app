import React, { useState } from 'react';

const Profile = () => {
  // Estado del usuario
  const [user, setUser] = useState({
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    avatar: "/api/placeholder/150/150",
    preferences: {
      notifications: true,
      darkMode: false,
      language: "es",
      soundEffects: true
    }
  });

  // Estado para las estadísticas
  const [stats] = useState({
    quizzesCompleted: 45,
    totalPoints: 2800,
    accuracy: 78,
    bestCategory: "Geografía",
    rank: "Experto",
    achievements: 12
  });

  // Estado para el modo edición
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // Manejador para guardar cambios
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  // Manejador para cambios en preferencias
  const handlePreferenceChange = (key) => {
    setUser(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key]
      }
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Encabezado del Perfil */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                    className="text-2xl font-bold border rounded px-2 py-1"
                  />
                ) : (
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                )}
                <p className="text-gray-600">{user.email}</p>
              </div>
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Guardar Cambios
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Editar Perfil
                </button>
              )}
            </div>
            <div className="flex space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {stats.rank}
              </span>
              <span className="text-gray-500 text-sm">
                🏆 {stats.achievements} logros
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Estadísticas Generales</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Quizzes Completados</span>
              <span className="font-medium">{stats.quizzesCompleted}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Puntos Totales</span>
              <span className="font-medium">{stats.totalPoints}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Precisión</span>
              <span className="font-medium">{stats.accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Mejor Categoría</span>
              <span className="font-medium">{stats.bestCategory}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Preferencias</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Notificaciones</span>
              <button
                onClick={() => handlePreferenceChange('notifications')}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                  user.preferences.notifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 m-1 ${
                  user.preferences.notifications ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Modo Oscuro</span>
              <button
                onClick={() => handlePreferenceChange('darkMode')}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                  user.preferences.darkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 m-1 ${
                  user.preferences.darkMode ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Efectos de Sonido</span>
              <button
                onClick={() => handlePreferenceChange('soundEffects')}
                className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                  user.preferences.soundEffects ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 m-1 ${
                  user.preferences.soundEffects ? 'translate-x-6' : ''
                }`} />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Logros Recientes</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-medium">Experto en Geografía</p>
                <p className="text-sm text-gray-600">100 respuestas correctas</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-medium">Racha Perfecta</p>
                <p className="text-sm text-gray-600">10 quizzes perfectos seguidos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-medium">Primera Victoria</p>
                <p className="text-sm text-gray-600">Completa tu primer quiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Acciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Mis Quizzes Creados</h3>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Crear Nuevo Quiz
            </button>
            <button className="w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              Ver Mis Quizzes
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Configuración de Cuenta</h3>
          <div className="space-y-4">
            <button className="w-full border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
              Cambiar Contraseña
            </button>
            <button className="w-full border border-red-300 text-red-600 px-4 py-2 rounded-md hover:bg-red-50">
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;