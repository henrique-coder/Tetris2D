'use strict';
const Coluna = 10;
const Linha = 20;
const Tam_Bloco = 30;
const Key = {
    Left: 37,
    Right: 39,
    Down: 40,
    Space: 32
}
Object.freeze(Key)
const movimento = {
    [Key.Left]: p => ({ ...p, x: p.x -1}),
    [Key.Right]: p => ({ ...p, x: p.x + 1}),
    [Key.Down]: p => ({ ...p, y: p.y + 1}),
    [Key.Space]: p => ({ ...p, y: p.y + 1})
}