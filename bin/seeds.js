const mongoose = require('mongoose');

const Bars = require('../models/Bars.model');


const bars = [
    {
    name: 'A Curva',
    opening_hours: '07:00',
    address: 'Estrada Comandante Camacho Freitas 625 - S.Roque, 9000-374 funchal',
    rating: 3.8,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757242/Dentolas/Bar_a_curva_idbvfu.png",
    dentinho: ['batata cozida com patas de porco', 'asas de frango'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'O Xenica',
    opening_hours: '09:00',
    address: 'Estrada João Gonçalves Zarco, 942, Machico, Portugal',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757248/Dentolas/xenica_zhkrcf.png",
    dentinho: ['Pota'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Bar o Roque',
    opening_hours: '08:00',
    address: 'Caminho dos Lamaceiros, 3a Lombo das Faias, 9200-157 Machico',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757243/Dentolas/Bar_o_Roque_ahhoei.png",
    dentinho: ['torresmos', 'tremoços', 'queijo fresco', 'amendoim'],   
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Venda do Bello',
    opening_hours: '12:00',
    address: 'Estr. das Eiras, Caniço',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757246/Dentolas/Venda_do_Belo_td62gz.png",
    dentinho: ['lascas de batata', 'tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'O Posto da Poncha',
    opening_hours: '07:00',
    address: 'ER102 415',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757247/Dentolas/O_posto_da_Poncha_d22iur.png",
    dentinho: ['moelas com batata'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Abrigo do Poiso',
    opening_hours: '08:00',
    address: 'ER103, Poiso-Via pico do Arieiro',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757242/Dentolas/Abrigo_do_Poiso_jyhfpg.png",
    dentinho: ['amendoim'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Venda do Noé',
    opening_hours: '18:00',
    address: 'Caminho Da Mae De Deus, 9125-101 Caniço',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757247/Dentolas/Venda_do_No%C3%A9_sho2dl.png",
    dentinho: ['macarrão', 'asinhas de frango'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'O Vizinho',
    opening_hours: '08:00',
    address: 'ER102 98-118, 9100-255 Santo António da Serra',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Bar_o_Vizinho_yidqlq.png",
    dentinho: ['tremoços', 'macarrão', 'favas'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Ponte de Pau (Shakira)',
    opening_hours: '09:00',
    address: 'R. Ribeira 168',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757248/Dentolas/Ponte_de_Pau_-_Shakira_gon9mt.png",
    dentinho: ['dobrada', 'macarrão', 'patas de porco', 'tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Castrinhos',
    opening_hours: '08:00',
    address: 'Caminho do Pinheiro das Voltas 12, 9000-150 Funchal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757241/Dentolas/Bar_Catrinhos_clvzro.png",
    dentinho: ['macarrão', 'carne estufada', 'tremoços', 'amendoim', 'milho frito'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Snack Bar Moisés',
    opening_hours: '07:00',
    address: 'Caminho da Levada da Serra, 1, 9135-030 Camacha',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757246/Dentolas/Snack_Bar_Mois%C3%A9s_ellto3.png", 
    dentinho: ['tremoços', 'amendoim'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Snack Bar o Golo',
    opening_hours: '09:00',
    address: 'Estrada Comandante Camacho de Freitas, 510 & 512, Funchal, Madeira 9020-152 Portugal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757246/Dentolas/Snack_Bar_O_Golo_gjjxem.png", 
    dentinho: ['chicarro'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
        name: 'Bar Das Romeiras',
        opening_hours: '09:00',
        address: 'Rua Cantinho das Virtudes, Funchal',
        rating: 4.5,
        picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757241/Dentolas/Bar_das_Romeiras_rafu2m.png", 
        dentinho: ['Chicken Wings'],
    },
    {
    name: 'Os Pescoços',                                             
    opening_hours: '09:00',
    address: 'Estrada Laranjal, Funchal',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757246/Dentolas/Os_pesco%C3%A7os_fhetnu.jpg", 
    dentinho: ['pescoços de galinha'],
    drinks: ['beer', 'wine']
    },
    {
    name: 'Silva As Patinhas',
    opening_hours: 'Open 24hours',
    address: 'Estr. do Luzirão 65, Estreito de Câmara de Lobos',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757245/Dentolas/Bar_Silva_as_Patinhas_z1sa5p.png", 
    dentinho: ['patinhas de porco', 'tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Meus Amigos',
    opening_hours: '10:00',
    address: 'Estr. Santo António da Serra 497, 9100-255 Santo António da Serra', 
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757242/Dentolas/Bar_Meus_Amigos_bzobje.png", 
    dentinho: ['macarrão', 'tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others'] 
    },
    {
    name: 'Cabouco bar',
    opening_hours: '08:00',
    address: 'ER206, Gaula',
    rating: 4.2,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Cabouco_Bar_x0dffu.png",
    dentinho: ['camarão', 'tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Cantinho do Abreu',
    opening_hours: '07:00',
    address: 'Caminho do Poço Barral 34, Funchal',
    rating: 4.6,
    picture_url:"https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Cantinho_do_Abreu_udy0de.png",  
    dentinho: ['camarão', 'tremoços'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'O Moega',
    opening_hours: '10:00',
    address: 'Caminho Velho da Tendeira, 9125-116 Caniço',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757242/Dentolas/Bar_O_Moega_swwdex.png",  
    dentinho: ['asinhas de frango', 'tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'sangria', 'others']
    },
    {
    name: 'As Patinhas',
    opening_hours: '10:00',
    address: 'Caminho da Cancela, Caniço',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669758058/Dentolas/As_Patinhas_olcj5a.png",  
    dentinho: ['asinhas de frango', 'patinhas de porco', 'tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Pé de Cabra',
    opening_hours: '06:00',
    address: 'Caminho da Ribeira dos Socorridos 5, 9000-000 Lombada',
    rating: 4.6, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757243/Dentolas/Bar_P%C3%A9_de_Cabra_prmokp.png",  
    dentinho: ['amendoim', 'tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'pé de cabra']
    },
    {
    name: 'Moinho Maloeira',
    opening_hours: '07:00',
    address: 'Estrada Regional 222, Estrada Fajã da ovelha nº19, 9370-315 Maloeira - Calheta - Madeira',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757245/Dentolas/Moinho_da_Maloeira_g9acdd.png",  
    dentinho: ['dobrada', 'tremoços'], 
    drinks: [ 'beer', 'wine']
    },
    {
    name: 'Chega de Securas',
    opening_hours: '07:00',
    address: 'Estrada Regional 102, Portugal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Chega_de_Securas_xcsiuf.png",  
    dentinho: ['queji da serra', 'asinhas de frango', 'patinhas de porco'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Brás Aquele Bar',      
    opening_hours: '10:00',
    address: 'Tv. dos Piornais 9000, 9000-000 Funchal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757243/Dentolas/Br%C3%A1s_Aquele_Bar_njtg70.jpg",  
    dentinho: ['camarão'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'Bar 21',         
    opening_hours: '10:00',
    address: 'ER203',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757237/Dentolas/Bar_21_mr1iuy.jpg",  
    dentinho: ['macarrão', 'tremoços', 'amendoim'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'O Girinho',       
    opening_hours: '07:00',
    address: ' n°1, Caminho Mun. dos Caboucos, Camacha',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757245/Dentolas/O_Girinho_cy20xu.jpg",  
    dentinho: ['macarrão', 'tremoços', 'amendoim'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Venda do Sócio',       
    opening_hours: '07:00',
    address: 'R. Sidónio Serôdio nº 1, 9125-114 Caniço',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757248/Dentolas/Venda_do_S%C3%B3cio_zld5ja.jpg",  
    dentinho: ['macarrão', 'tremoços', 'amendoim', 'milho frito'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    }
 
];

const seedDB = async bars => {
    try {
        const dbConnection = await mongoose.connect('mongodb://localhost/DentolasProject');
        console.log('Connection made to:', dbConnection.connections[0].name);
        const allBooks = await Bars.create(bars)
        console.log('Created the bars')
    } catch(error) {
        console.log('An error occurred', error)
    } finally {
        await mongoose.connection.close();
    }
  }

  seedDB(bars);