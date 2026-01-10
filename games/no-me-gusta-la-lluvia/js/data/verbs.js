// js/data/verbs.js

export const verbSets = {
    'Verbos 1': {
        hablar: { yo: 'hablo', tú: 'hablas', ella: 'habla', nosotros: 'hablamos', vosotros: 'habláis', ellos: 'hablan' },
        escuchar: { yo: 'escucho', tú: 'escuchas', ella: 'escucha', nosotros: 'escuchamos', vosotros: 'escucháis', ellos: 'escuchan' },
        estudiar: { yo: 'estudio', tú: 'estudias', ella: 'estudia', nosotros: 'estudiamos', vosotros: 'estudiáis', ellos: 'estudian' },
        bailar: { yo: 'bailo', tú: 'bailas', ella: 'baila', nosotros: 'bailamos', vosotros: 'bailáis', ellos: 'bailan' },
        trabajar: { yo: 'trabajo', tú: 'trabajas', ella: 'trabaja', nosotros: 'trabajamos', vosotros: 'trabajáis', ellos: 'trabajan' },
        viajar: { yo: 'viajo', tú: 'viajas', ella: 'viaja', nosotros: 'viajamos', vosotros: 'viajáis', ellos: 'viajan' },
        desayunar: { yo: 'desayuno', tú: 'desayunas', ella: 'desayuna', nosotros: 'desayunamos', vosotros: 'desayunáis', ellos: 'desayunan' },
        almorzar: { yo: 'almuerzo', tú: 'almuerzas', ella: 'almuerza', nosotros: 'almorzamos', vosotros: 'almorzáis', ellos: 'almuerzan' },
        cenar: { yo: 'ceno', tú: 'cenas', ella: 'cena', nosotros: 'cenamos', vosotros: 'cenáis', ellos: 'cenan' },
        terminar: { yo: 'termino', tú: 'terminas', ella: 'termina', nosotros: 'terminamos', vosotros: 'termináis', ellos: 'terminan' }
    },
    
    'Verbos 2': {
        beber: { yo: 'bebo', tú: 'bebes', ella: 'bebe', nosotros: 'bebemos', vosotros: 'bebéis', ellos: 'beben' },
        leer: { yo: 'leo', tú: 'lees', ella: 'lee', nosotros: 'leemos', vosotros: 'leéis', ellos: 'leen' },
        correr: { yo: 'corro', tú: 'corres', ella: 'corre', nosotros: 'corremos', vosotros: 'corréis', ellos: 'corren' },
        comer: { yo: 'como', tú: 'comes', ella: 'come', nosotros: 'comemos', vosotros: 'coméis', ellos: 'comen' },
        comprar: { yo: 'veo', tú: 'ves', ella: 've', nosotros: 'vemos', vosotros: 'veis', ellos: 'ven' },
        comprar: { yo: 'hago', tú: 'haces', ella: 'hace', nosotros: 'hacemos', vosotros: 'hacéis', ellos: 'hacen' }

    },
    'Verbos 3': {
        vivir: { yo: 'vivo', tú: 'vives', ella: 'vive', nosotros: 'vivimos', vosotros: 'vivís', ellos: 'viven' },
        abrir: { yo: 'abro', tú: 'abres', ella: 'abre', nosotros: 'abrimos', vosotros: 'abrís', ellos: 'abren' },
        asistir: { yo: 'asisto', tú: 'asistes', ella: 'asiste', nosotros: 'asistimos', vosotros: 'asistís', ellos: 'asisten' },
        estar: { yo: 'subo', tú: 'subes', ella: 'sube', nosotros: 'subimos', vosotros: 'subís', ellos: 'suben' },
        estar: { yo: 'escribo', tú: 'escribes', ella: 'escribe', nosotros: 'escribimos', vosotros: 'escribís', ellos: 'escriben' },
        estar: { yo: 'recibo', tú: 'recibes', ella: 'recibe', nosotros: 'recibimos', vosotros: 'recibís', ellos: 'reciben' }
    }
};

export const pronouns = ['yo', 'tú', 'ella', 'nosotros', 'vosotros', 'ellos'];

// Default verb set (backwards compatibility)
export const verbs = verbSets['Verbos 1'];
