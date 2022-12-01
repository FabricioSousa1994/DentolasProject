const mongoose = require('mongoose');

const Bars = require('../models/Bars.model');


const bars = [
    {
    name: 'A Curva',
    opening_hours: '07:00',
    address: 'Estrada Comandante Camacho Freitas 625 - S.Roque, 9000-374 funchal',
    rating: 3.8,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851668/bar_curva_wimrcl.jpg", //foto do bar
    dentinho: ['Patinhas de porco', 'Asinhas de frango'],
    
    },
    {
    name: 'O Xenica',
    opening_hours: '09:00',
    address: 'Estrada João Gonçalves Zarco, 942, Machico, Portugal',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851824/xenica_bar_fvzdjv.jpg",
    dentinho: ['Pota']
    },
    {
    name: 'Bar o Roque',
    opening_hours: '08:00',
    address: 'Caminho dos Lamaceiros, 3a Lombo das Faias, 9200-157 Machico',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851897/roque_lehmre.jpg",
    dentinho: ['Torresmos', 'Tremoços', 'Queijo fresco', 'Amendoim']
    },
    {
    name: 'Venda do Bello',
    opening_hours: '12:00',
    address: 'Estr. das Eiras, Caniço',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851969/venda_bello_vldzmj.jpg",
    dentinho: ['Lascas de batata', 'Tremoços']
    },
    {
    name: 'O Posto da Poncha',
    opening_hours: '07:00',
    address: 'ER102 415',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852111/posto_da_poncha_meeoke.jpg",
    dentinho: ['Moelas']
    },
    {
    name: 'Abrigo do Poiso',
    opening_hours: '08:00',
    address: 'ER103, Poiso-Via pico do Arieiro',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852473/abrigo_cg5kwh.jpg",
    dentinho: ['Amendoim']
    },
    {
    name: 'Venda do Noé',
    opening_hours: '18:00',
    address: 'Caminho Da Mae De Deus, 9125-101 Caniço',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852580/noe_ojjop3.jpg",
    dentinho: ['Macarrão', 'Asinhas de Frango']
    },
    {
    name: 'O Vizinho',
    opening_hours: '08:00',
    address: 'ER102 98-118, 9100-255 Santo António da Serra',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852692/vizinho_cylhz9.jpg",
    dentinho: ['Tremoços', 'Macarrão', 'Favas']
    },
    {
    name: 'Ponte de Pau (Shakira)',
    opening_hours: '09:00',
    address: 'R. Ribeira 168',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852767/shakira_l7q1ne.jpg",
    dentinho: ['Dobrada', 'Macarrão', 'Patas de porco', 'Tremoços']
    },
    {
    name: 'Castrinhos',
    opening_hours: '08:00',
    address: 'Caminho do Pinheiro das Voltas 12, 9000-150 Funchal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852845/castrinhos_crojvu.jpg",
    dentinho: ['Macarrão', 'Carne de vaca estufada', 'Tremoços', 'Amendoim', 'Milho frito']
    },
    {
    name: 'Snack Bar Moisés',
    opening_hours: '07:00',
    address: 'Caminho da Levada da Serra, 1, 9135-030 Camacha',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852983/moises_m4gs67.jpg", 
    dentinho: ['Tremoços', 'Amendoim']
    },
    {
    name: 'Snack Bar o Golo',
    opening_hours: '09:00',
    address: 'Estrada Comandante Camacho de Freitas, 510 & 512, Funchal, Madeira 9020-152 Portugal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853139/golo_y7nbqe.jpg", 
    dentinho: ['Chicarro']
    },
    {
        name: 'Bar Das Romeiras',
        opening_hours: '09:00',
        address: 'Rua Cantinho das Virtudes, Funchal',
        rating: 4.5,
        picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853223/romeiras_wuwr84.jpg", 
        dentinho: ['Asinhas de frango'],
    },
    {
    name: 'Os Pescoços',                                             
    opening_hours: '09:00',
    address: 'Estrada Laranjal, Funchal',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853325/pesco%C3%A7ada_cyaag9.jpg", 
    dentinho: ['Pescoços de galinha']
    },
    {
    name: 'Silva As Patinhas',
    opening_hours: 'Aberto 24 horas',
    address: 'Estr. do Luzirão 65, Estreito de Câmara de Lobos',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853597/silva_patinhas_f5z156.jpg", 
    dentinho: ['Patinhas de porco', 'Tremoços'],
    },
    {
    name: 'Meus Amigos',
    opening_hours: '10:00',
    address: 'Estr. Santo António da Serra 497, 9100-255 Santo António da Serra', 
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669854130/amigos_vbtpfh.jpg", 
    dentinho: ['Macarrão', 'Tremoços'] 
    },
    {
    name: 'Cabouco bar',
    opening_hours: '08:00',
    address: 'ER206, Gaula',
    rating: 4.2,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Cabouco_Bar_x0dffu.png",
    dentinho: ['Camarão', 'Tremoços'],
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Cantinho do Abreu',
    opening_hours: '07:00',
    address: 'Caminho do Poço Barral 34, Funchal',
    rating: 4.6,
    picture_url:"https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Cantinho_do_Abreu_udy0de.png",  
    dentinho: ['Camarão', 'Tremoços'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'O Moega',
    opening_hours: '10:00',
    address: 'Caminho Velho da Tendeira, 9125-116 Caniço',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757242/Dentolas/Bar_O_Moega_swwdex.png",  
    dentinho: ['Asinhas de frango', 'Tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'sangria', 'others']
    },
    {
    name: 'As Patinhas',
    opening_hours: '10:00',
    address: 'Caminho da Cancela, Caniço',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669758058/Dentolas/As_Patinhas_olcj5a.png",  
    dentinho: ['Asinhas de frango', 'Patinhas de porco', 'Tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Pé de Cabra',
    opening_hours: '06:00',
    address: 'Caminho da Ribeira dos Socorridos 5, 9000-000 Lombada',
    rating: 4.6, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757243/Dentolas/Bar_P%C3%A9_de_Cabra_prmokp.png",  
    dentinho: ['Amendoim', 'Tremoços'], 
    drinks: ['poncha', 'beer', 'wine', 'pé de cabra']
    },
    {
    name: 'Moinho Maloeira',
    opening_hours: '07:00',
    address: 'Estrada Regional 222, Estrada Fajã da ovelha nº19, 9370-315 Maloeira - Calheta - Madeira',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757245/Dentolas/Moinho_da_Maloeira_g9acdd.png",  
    dentinho: ['Dobrada', 'Tremoços'], 
    drinks: [ 'beer', 'wine']
    },
    {
    name: 'Chega de Securas',
    opening_hours: '07:00',
    address: 'Estrada Regional 102, Portugal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757244/Dentolas/Chega_de_Securas_xcsiuf.png",  
    dentinho: ['Queijo fresco', 'Asinhas de frango', 'Patinhas de porco'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Brás Aquele Bar',      
    opening_hours: '10:00',
    address: 'Tv. dos Piornais 9000, 9000-000 Funchal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757243/Dentolas/Br%C3%A1s_Aquele_Bar_njtg70.jpg",  
    dentinho: ['Camarão'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'Bar 21',         
    opening_hours: '10:00',
    address: 'ER203',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757237/Dentolas/Bar_21_mr1iuy.jpg",  
    dentinho: ['Macarrão', 'Tremoços', 'Amendoim'], 
    drinks: ['beer', 'wine']
    },
    {
    name: 'O Girinho',       
    opening_hours: '07:00',
    address: ' n°1, Caminho Mun. dos Caboucos, Camacha',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757245/Dentolas/O_Girinho_cy20xu.jpg",  
    dentinho: ['Macarrão', 'Tremoços', 'Amendoim'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    },
    {
    name: 'Venda do Sócio',       
    opening_hours: '07:00',
    address: 'R. Sidónio Serôdio nº 1, 9125-114 Caniço',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669757248/Dentolas/Venda_do_S%C3%B3cio_zld5ja.jpg",  
    dentinho: ['Macarrão', 'Tremoços', 'Amendoim', 'Milho frito com sal'], 
    drinks: ['poncha', 'beer', 'wine', 'others']
    }
 
];

/*const seedDB = async bars => {
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

  seedDB(bars);*/