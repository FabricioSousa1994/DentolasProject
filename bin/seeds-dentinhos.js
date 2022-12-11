const mongoose = require('mongoose');

const Dentinho = require('../models/Dentinho.model');

const dentinhos = [
    {
        name: 'Tremoços',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849314/tremo%C3%A7os_b95fbj.jpg',
        bar: ['63891410631f9a63edfe4e4e', '63891410631f9a63edfe4e4f', '63891410631f9a63edfe4e50', '63891410631f9a63edfe4e51', '63891410631f9a63edfe4e53', '63891410631f9a63edfe4e54', '63891410631f9a63edfe4e4d', '63891410631f9a63edfe4e58', '63891410631f9a63edfe4e59', '63891410631f9a63edfe4e5b', '63891410631f9a63edfe4e5c', '63891410631f9a63edfe4e5e', '63891410631f9a63edfe4e52', '63891410631f9a63edfe4e61', '63891410631f9a63edfe4e57', '63891410631f9a63edfe4e60', '63891410631f9a63edfe4e41', '63891410631f9a63edfe4e42', '63891410631f9a63edfe4e46', '63891410631f9a63edfe4e47'] 
    },
    {
        name:'Amendoim',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849401/amendoim_y0lxom.jpg',
        bar: ['63891410631f9a63edfe4e4f', '63891410631f9a63edfe4e50', '63891410631f9a63edfe4e53', '63891410631f9a63edfe4e56', '63891410631f9a63edfe4e58', '63891410631f9a63edfe4e59', '63891410631f9a63edfe4e5b', '63891410631f9a63edfe4e5c', '63891410631f9a63edfe4e5d', '63891410631f9a63edfe4e5e', '63891410631f9a63edfe4e5f', '63891410631f9a63edfe4e57', '63891410631f9a63edfe4e60', '63891410631f9a63edfe4e41', '63891410631f9a63edfe4e44', '63891410631f9a63edfe4e48', '63891410631f9a63edfe4e49']
    },
    {
        name: 'Milho frito com sal',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849503/milho_frito_com_sal_vyaukl.jpg',
        bar: ['63891410631f9a63edfe4e59', '63891410631f9a63edfe4e5b', '63891410631f9a63edfe4e5c', '63891410631f9a63edfe4e48']
    },
    {
        name: 'Lascas de batata',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849626/lascas_de_batata_vtdowd.jpg',
        bar: ['63891410631f9a63edfe4e42']
    },
    {
        name: 'Pipocas com sal',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669849710/pipocas_com_sal_xo8yo7.jpg',
        bar: ['']
    },
    {
        name: 'Patinhas de porco',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_a_curva_fxfdbk.png',
        bar: ['63891410631f9a63edfe4e55', '63891410631f9a63edfe4e4d', '63891410631f9a63edfe4e52', '63891410631f9a63edfe4e3f', '63891410631f9a63edfe4e47']
    },
    {
        name: 'Asinhas de frango',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_O_Moega_qejfq6.png',
        bar: ['63891410631f9a63edfe4e4b', '63891410631f9a63edfe4e51', '63891410631f9a63edfe4e55', '63891410631f9a63edfe4e5a', '63891410631f9a63edfe4e52', '63891410631f9a63edfe4e3f', '63891410631f9a63edfe4e45']
    },
    {
        name: 'Torresmos',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850373/torresmos_ifjucg.jpg',
        bar: ['63891410631f9a63edfe4e5c', '63891410631f9a63edfe4e41']
    },
    {
        name: 'Carne de vaca estufada',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_Catrinhos_vb93xv.png',
        bar: ['63891410631f9a63edfe4e48']
    },
    {
        name: 'Queijo Fresco',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850604/queijo_fresco_hl2c6f.jpg',
        bar: ['63891410631f9a63edfe4e55', '63891410631f9a63edfe4e41']
    },
    {
        name: 'Moelas',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/O_posto_da_Poncha_vd53bn.png',
        bar: ['63891410631f9a63edfe4e43']
    },
    {
        name: 'Macarrão',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757102/Bar_Meus_Amigos_jixwyx.png',
        bar: ['63891410631f9a63edfe4e4e', '63891410631f9a63edfe4e58', '63891410631f9a63edfe4e59', '63891410631f9a63edfe4e57', '63891410631f9a63edfe4e45', '63891410631f9a63edfe4e46', '63891410631f9a63edfe4e47', '63891410631f9a63edfe4e48']
    },
    {
        name: 'Favas',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757103/Bar_o_Vizinho_haznhs.png',
        bar: ['63891410631f9a63edfe4e46']
    },
    {
        name: 'Chicarro',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/Snack_Bar_O_Golo_wgdrun.png',
        bar: ['63891410631f9a63edfe4e4a']
    },
    {
        name: 'Pescoços de galinha',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669850504/pesco%C3%A7os_sjmy8n.webp',
        bar: ['63891410631f9a63edfe4e4c']
    },
    {
        name: 'Camarão',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757104/Cantinho_do_Abreu_dlzvy6.png',
        bar: ['63891410631f9a63edfe4e56']
    },
    {
        name: 'Dobrada',
        picture_url:'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757103/Moinho_da_Maloeira_sfpiqu.png',
        bar: ['63891410631f9a63edfe4e54', '63891410631f9a63edfe4e47']
    },
    {
        name: 'Pota',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757105/xenica_hotlhv.png',
        bar: ['63891410631f9a63edfe4e40']
    },
    {
        name: 'Azeitonas',
        picture_url: 'https://res.cloudinary.com/duy4rj4hd/image/upload/v1669864224/azeitonas_wj70yl.jpg',
        bar: ['63891410631f9a63edfe4e61'] 
    }

];

const seedDB = async dentinhos => {
    try {
        const dbConnection = await mongoose.connect('mongodb://localhost/DentolasProject');
        console.log('Connection made to:', dbConnection.connections[0].name);
        await Dentinho.create(dentinhos)
        console.log('Created the dentinhos')
    } catch(error) {
        console.log('An error occurred', error)
    } finally {
        await mongoose.connection.close();
    }
  }

  seedDB(dentinhos);




