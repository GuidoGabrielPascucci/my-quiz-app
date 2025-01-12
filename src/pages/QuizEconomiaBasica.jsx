import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const QuizEconomiaBasica = () => {
  
  const preguntas = [
    {
      pregunta: "¿Qué es la oferta y la demanda?",
      opciones: [
        "Un método de contabilidad",
        "La relación entre la cantidad disponible de un producto y el deseo de comprarlo",
        "Una estrategia de marketing",
        "Un tipo de impuesto"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es la inflación?",
      opciones: [
        "La disminución general de precios",
        "El aumento en el valor de la moneda",
        "El aumento general en los precios de bienes y servicios",
        "La tasa de interés bancaria"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es el PIB?",
      opciones: [
        "Producto Interno Bruto - el valor total de bienes y servicios producidos en un país",
        "Precio Internacional Base",
        "Plan de Inversión Bancaria",
        "Producto de Importación Básica"
      ],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Qué es un monopolio?",
      opciones: [
        "Un juego de mesa",
        "Una situación donde múltiples empresas compiten",
        "Una empresa que domina completamente un mercado sin competencia",
        "Un tipo de inversión"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es el mercado de valores?",
      opciones: [
        "Un supermercado grande",
        "Un lugar donde se intercambian acciones de empresas",
        "Una tienda de descuentos",
        "Un banco central"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es el tipo de cambio?",
      opciones: [
        "La tasa a la que se intercambia una moneda por otra",
        "El cambio de precio de un producto",
        "El cambio de banco",
        "La tasa de interés de un préstamo"
      ],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Qué es la recesión económica?",
      opciones: [
        "Cuando aumenta la producción",
        "Un período de crecimiento económico",
        "Una disminución significativa de la actividad económica",
        "El aumento de las exportaciones"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es el desempleo?",
      opciones: [
        "Tener múltiples trabajos",
        "La población que no está en edad de trabajar",
        "La situación de las personas que no tienen empleo pero lo buscan activamente",
        "Trabajar medio tiempo"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué son los impuestos?",
      opciones: [
        "Dinero que los bancos prestan al gobierno",
        "Contribuciones obligatorias que las personas y empresas hacen al Estado",
        "Dinero que el gobierno regala a los ciudadanos",
        "Inversiones en la bolsa de valores"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es la deuda pública?",
      opciones: [
        "El dinero que los ciudadanos deben al banco",
        "Los impuestos no pagados",
        "El dinero que el gobierno debe a sus ciudadanos y a otros países",
        "Las deudas entre empresas privadas"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es la competencia perfecta?",
      opciones: [
        "Cuando solo hay una empresa en el mercado",
        "Cuando hay muchos compradores y vendedores sin poder para influir en el precio",
        "Cuando el gobierno controla los precios",
        "Cuando las empresas se ponen de acuerdo en los precios"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es la elasticidad de la demanda?",
      opciones: [
        "La capacidad de un producto para estirarse",
        "La sensibilidad de la cantidad demandada ante cambios en el precio",
        "La flexibilidad en los horarios de compra",
        "La capacidad de producción de una empresa"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué son los bienes sustitutos?",
      opciones: [
        "Productos que se complementan entre sí",
        "Productos que no tienen relación",
        "Productos que pueden reemplazar a otros en el consumo",
        "Productos de primera necesidad"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es la balanza comercial?",
      opciones: [
        "Un instrumento para pesar productos",
        "La diferencia entre exportaciones e importaciones de un país",
        "El balance general de un negocio",
        "La cantidad de dinero en circulación"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es la depreciación?",
      opciones: [
        "El aumento del valor de un activo",
        "La pérdida de valor de un activo con el tiempo",
        "El precio de un producto",
        "La ganancia en una inversión"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es el costo de oportunidad?",
      opciones: [
        "El costo de un producto en oferta",
        "El costo de producción",
        "El valor de la mejor alternativa no elegida",
        "El costo de la materia prima"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es la política fiscal?",
      opciones: [
        "Las decisiones del banco central sobre las tasas de interés",
        "El uso del gasto público y los impuestos para influir en la economía",
        "Las políticas de comercio internacional",
        "Las reglas de contabilidad"
      ],
      respuestaCorrecta: 1
    },
    {
      pregunta: "¿Qué es el margen de ganancia?",
      opciones: [
        "La diferencia entre el precio de venta y el costo",
        "El total de ventas",
        "El costo de producción",
        "El salario de los empleados"
      ],
      respuestaCorrecta: 0
    },
    {
      pregunta: "¿Qué es la deflación?",
      opciones: [
        "El aumento general de precios",
        "La devaluación de la moneda",
        "La disminución general de precios",
        "El aumento de la producción"
      ],
      respuestaCorrecta: 2
    },
    {
      pregunta: "¿Qué es el poder adquisitivo?",
      opciones: [
        "La cantidad de dinero que tiene una persona",
        "La capacidad de comprar bienes y servicios con una cantidad de dinero",
        "El poder político de un país",
        "La capacidad de producción de una empresa"
      ],
      respuestaCorrecta: 1
    }
  ];
  
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarRetroalimentacion, setMostrarRetroalimentacion] = useState(false);

  const manejarRespuesta = (indiceOpcion) => {
    setRespuestaSeleccionada(indiceOpcion);
    setMostrarRetroalimentacion(true);

    if (indiceOpcion === preguntas[preguntaActual].respuestaCorrecta) {
      setPuntuacion(puntuacion + 1);
    }

    setTimeout(() => {
      setMostrarRetroalimentacion(false);
      setRespuestaSeleccionada(null);
      
      if (preguntaActual < preguntas.length - 1) {
        setPreguntaActual(preguntaActual + 1);
      } else {
        setMostrarResultado(true);
      }
    }, 1500);
  };

  const reiniciarQuiz = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setMostrarResultado(false);
    setRespuestaSeleccionada(null);
    setMostrarRetroalimentacion(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Quiz de Economía Básica
        </h1>
        
        {!mostrarResultado ? (
          <div className="space-y-6">
            <div className="text-lg font-medium text-gray-600">
              Pregunta {preguntaActual + 1} de {preguntas.length}
            </div>
            
            <div className="text-xl text-gray-800 font-medium mb-6">
              {preguntas[preguntaActual].pregunta}
            </div>

            <div className="space-y-3">
              {preguntas[preguntaActual].opciones.map((opcion, index) => {
                let buttonStyle = "w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex justify-between items-center ";
                
                if (mostrarRetroalimentacion) {
                  if (index === preguntas[preguntaActual].respuestaCorrecta) {
                    buttonStyle += "bg-green-100 border-green-500 text-green-700";
                  } else if (index === respuestaSeleccionada) {
                    buttonStyle += "bg-red-100 border-red-500 text-red-700";
                  } else {
                    buttonStyle += "bg-gray-50 border-gray-200 text-gray-500";
                  }
                } else {
                  buttonStyle += "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
                }

                return (
                  <button
                    key={index}
                    className={buttonStyle}
                    onClick={() => manejarRespuesta(index)}
                    disabled={mostrarRetroalimentacion}
                  >
                    <span>{opcion}</span>
                    {mostrarRetroalimentacion && index === preguntas[preguntaActual].respuestaCorrecta && (
                      <Check className="w-5 h-5 text-green-600" />
                    )}
                    {mostrarRetroalimentacion && index === respuestaSeleccionada && index !== preguntas[preguntaActual].respuestaCorrecta && (
                      <X className="w-5 h-5 text-red-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              ¡Quiz completado!
            </h2>
            <p className="text-xl text-gray-600">
              Tu puntuación: {puntuacion} de {preguntas.length}
            </p>
            <button 
              onClick={reiniciarQuiz}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Reiniciar Quiz
            </button>
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          Puntuación actual: {puntuacion}
        </div>
      </div>
    </div>
  );
};

export default QuizEconomiaBasica;