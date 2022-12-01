const mongoose = require('mongoose');

const Dentinho = require('../models/Dentinho.model');

const dentinhos = [
    {
        name: 'Tremoços',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849314/tremo%C3%A7os_b95fbj.jpg', 
    },
    {
        name:'Amendoim',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849401/amendoim_y0lxom.jpg',
    },
    {
        name: 'Milho frito com sal',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849503/milho_frito_com_sal_vyaukl.jpg',
    },
    {
        name: 'Lascas de batata',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849626/lascas_de_batata_vtdowd.jpg',
    },
    {
        name: 'Pipocas com sal',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849710/pipocas_com_sal_xo8yo7.jpg',
    },
    {
        name: 'Patinhas de porco',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_a_curva_fxfdbk.png',
    },
    {
        name: 'Asinhas de frango',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_O_Moega_qejfq6.png',
    },
    {
        name: 'Torresmos',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850373/torresmos_ifjucg.jpg',
    },
    {
        name: 'Carne de vaca estufada',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_Catrinhos_vb93xv.png',
    },
    {
        name: 'Queijo Fresco',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850604/queijo_fresco_hl2c6f.jpg',
    },
    {
        name: 'Moelas',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/O_posto_da_Poncha_vd53bn.png',
    },
    {
        name: 'Macarrão',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_Meus_Amigos_jixwyx.png',
    },
    {
        name: 'Favas',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757103/Bar_o_Vizinho_haznhs.png',
    },
    {
        name: 'Chicarro',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/Snack_Bar_O_Golo_wgdrun.png',
    },
    {
        name: 'Pescoços de galinha',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850504/pesco%C3%A7os_sjmy8n.webp',
    },
    {
        name: 'Camarão',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/Cantinho_do_Abreu_dlzvy6.png',
    },
    {
        name: 'Dobrada',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757103/Moinho_da_Maloeira_sfpiqu.png',
    },
    {
        name: 'Pota',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757105/xenica_hotlhv.png'
    }

]