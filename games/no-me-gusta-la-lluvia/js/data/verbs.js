// js/data/verbs.js

export const verbSets = {
    'Verbos 1': {
        hablar: { yo: 'hablo', tú: 'hablas', ella: 'habla', nosotros: 'hablamos', vosotros: 'habláis', ellos: 'hablan' },
        escuchar: { yo: 'escucho', tú: 'escuchas', ella: 'escucha', nosotros: 'escuchamos', vosotros: 'escucháis', ellos: 'escuchan' },
        estudiar: { yo: 'estudio', tú: 'estudias', ella: 'estudia', nosotros: 'estudiamos', vosotros: 'estudiáis', ellos: 'estudian' },
        bailar: { yo: 'bailo', tú: 'bailas', ella: 'baila', nosotros: 'bailamos', vosotros: 'bailáis', ellos: 'bailan' }
    },
    'Verbos 2': {
        viajar: { yo: 'viajo', tú: 'viajas', ella: 'viaja', nosotros: 'viajamos', vosotros: 'viajáis', ellos: 'viajan' },
        trabajar: { yo: 'trabajo', tú: 'trabajas', ella: 'trabaja', nosotros: 'trabajamos', vosotros: 'trabajáis', ellos: 'trabajan' },
        cantar: { yo: 'canto', tú: 'cantas', ella: 'canta', nosotros: 'cantamos', vosotros: 'cantáis', ellos: 'cantan' },
        comprar: { yo: 'compro', tú: 'compras', ella: 'compra', nosotros: 'compramos', vosotros: 'compráis', ellos: 'compran' }
    },
    'Verbos 3': {
        tener: { yo: 'tengo', tú: 'tienes', ella: 'tiene', nosotros: 'tenemos', vosotros: 'tenéis', ellos: 'tienen' },
        hacer: { yo: 'hago', tú: 'haces', ella: 'hace', nosotros: 'hacemos', vosotros: 'hacéis', ellos: 'hacen' },
        comer: { yo: 'como', tú: 'comes', ella: 'come', nosotros: 'comemos', vosotros: 'coméis', ellos: 'comen' },
        estar: { yo: 'estoy', tú: 'estás', ella: 'está', nosotros: 'estamos', vosotros: 'estáis', ellos: 'están' }
    }
};

export const pronouns = ['yo', 'tú', 'ella', 'nosotros', 'vosotros', 'ellos'];

// Default verb set (backwards compatibility)
export const verbs = verbSets['Verbos 1'];
