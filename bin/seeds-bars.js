const mongoose = require('mongoose');

const Bars = require('../models/Bars.model');


const bars = [
    {
    name: 'A Curva',
    opening_hours: '07:00',
    address: 'Estrada Comandante Camacho Freitas 625 - S.Roque, 9000-374 funchal',
    rating: 3.8,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851668/bar_curva_wimrcl.jpg",
    dentinho: ['6389043c805ffa5924c24ca8', '6389043c805ffa5924c24ca9'],
    
    },
    {
    name: 'O Xenica',
    opening_hours: '09:00',
    address: 'Estrada João Gonçalves Zarco, 942, Machico, Portugal',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851824/xenica_bar_fvzdjv.jpg",
    dentinho: ['6389043c805ffa5924c24cb4']
    },
    {
    name: 'Bar o Roque',
    opening_hours: '08:00',
    address: 'Caminho dos Lamaceiros, 3a Lombo das Faias, 9200-157 Machico',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851897/roque_lehmre.jpg",
    dentinho: ['6389043c805ffa5924c24caa', '6389043c805ffa5924c24ca3', '6389043c805ffa5924c24cac', '6389043c805ffa5924c24ca4']
    },
    {
    name: 'Venda do Bello',
    opening_hours: '12:00',
    address: 'Estr. das Eiras, Caniço',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669851969/venda_bello_vldzmj.jpg",
    dentinho: ['6389043c805ffa5924c24ca6', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'O Posto da Poncha',
    opening_hours: '07:00',
    address: 'ER102 415',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852111/posto_da_poncha_meeoke.jpg",
    dentinho: ['6389043c805ffa5924c24cad']
    },
    {
    name: 'Abrigo do Poiso',
    opening_hours: '08:00',
    address: 'ER103, Poiso-Via pico do Arieiro',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852473/abrigo_cg5kwh.jpg",
    dentinho: ['6389043c805ffa5924c24ca4']
    },
    {
    name: 'Venda do Noé',
    opening_hours: '18:00',
    address: 'Caminho Da Mae De Deus, 9125-101 Caniço',
    rating: 4.6,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852580/noe_ojjop3.jpg",
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca9']
    },
    {
    name: 'O Vizinho',
    opening_hours: '08:00',
    address: 'ER102 98-118, 9100-255 Santo António da Serra',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852692/vizinho_cylhz9.jpg",
    dentinho: ['6389043c805ffa5924c24ca3', '6389043c805ffa5924c24cae', '6389043c805ffa5924c24caf']
    },
    {
    name: 'Ponte de Pau (Shakira)',
    opening_hours: '09:00',
    address: 'R. Ribeira 168',
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852767/shakira_l7q1ne.jpg",
    dentinho: ['6389043c805ffa5924c24cb3', '6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca8', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'Castrinhos',
    opening_hours: '08:00',
    address: 'Caminho do Pinheiro das Voltas 12, 9000-150 Funchal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852845/castrinhos_crojvu.jpg",
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24cab', '6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca5']
    },
    {
    name: 'Snack Bar Moisés',
    opening_hours: '07:00',
    address: 'Caminho da Levada da Serra, 1, 9135-030 Camacha',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669852983/moises_m4gs67.jpg", 
    dentinho: ['6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4']
    },
    {
    name: 'Snack Bar o Golo',
    opening_hours: '09:00',
    address: 'Estrada Comandante Camacho de Freitas, 510 & 512, Funchal, Madeira 9020-152 Portugal',
    rating: 4.5,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853139/golo_y7nbqe.jpg", 
    dentinho: ['6389043c805ffa5924c24cb0']
    },
    {
        name: 'Bar Das Romeiras',
        opening_hours: '09:00',
        address: 'Rua Cantinho das Virtudes, Funchal',
        rating: 4.5,
        picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853223/romeiras_wuwr84.jpg", 
        dentinho: ['6389043c805ffa5924c24ca9'],
    },
    {
    name: 'Os Pescoços',                                             
    opening_hours: '09:00',
    address: 'Estrada Laranjal, Funchal',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853325/pesco%C3%A7ada_cyaag9.jpg", 
    dentinho: ['6389043c805ffa5924c24cb1']
    },
    {
    name: 'Silva As Patinhas',
    opening_hours: 'Aberto 24 horas',
    address: 'Estr. do Luzirão 65, Estreito de Câmara de Lobos',
    rating: 4.4,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669853597/silva_patinhas_f5z156.jpg", 
    dentinho: ['6389043c805ffa5924c24ca8', '6389043c805ffa5924c24ca3'],
    },
    {
    name: 'Meus Amigos',
    opening_hours: '10:00',
    address: 'Estr. Santo António da Serra 497, 9100-255 Santo António da Serra', 
    rating: 4.3,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669854130/amigos_vbtpfh.jpg", 
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca3'] 
    },
    {
    name: 'Cabouco bar',
    opening_hours: '08:00',
    address: 'ER206, Gaula',
    rating: 4.2,
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859426/No-Photo-Available_xposkb.jpg",
    dentinho: ['6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'Cantinho do Abreu',
    opening_hours: '07:00',
    address: 'Caminho do Poço Barral 34, Funchal',
    rating: 4.6,
    picture_url:"https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859756/cantinho_abreu_rphyit.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'O Moega',
    opening_hours: '10:00',
    address: 'Caminho Velho da Tendeira, 9125-116 Caniço',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859940/moega_ganzyg.jpg",  
    dentinho: ['6389043c805ffa5924c24ca9', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'As Patinhas',
    opening_hours: '10:00',
    address: 'Caminho da Cancela, Caniço',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669860069/patinhas_sggm6b.jpg",  
    dentinho: ['6389043c805ffa5924c24ca9', '6389043c805ffa5924c24ca8', '6389043c805ffa5924c24ca3'], 
    },
    {
    name: 'Pé de Cabra',
    opening_hours: '06:00',
    address: 'Caminho da Ribeira dos Socorridos 5, 9000-000 Lombada',
    rating: 4.6, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669860209/pe_cabra_yle3vx.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'Moinho Maloeira',
    opening_hours: '07:00',
    address: 'Estrada Regional 222, Estrada Fajã da ovelha nº19, 9370-315 Maloeira - Calheta - Madeira',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669860346/moinho_pqusfi.jpg",  
    dentinho: ['6389043c805ffa5924c24cb3', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'Chega de Securas',
    opening_hours: '07:00',
    address: 'Estrada Regional 102, Portugal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859426/No-Photo-Available_xposkb.jpg",  
    dentinho: ['6389043c805ffa5924c24cac', '6389043c805ffa5924c24ca9', '6389043c805ffa5924c24ca8'], 
    },
    {
    name: 'Brás Aquele Bar',      
    opening_hours: '10:00',
    address: 'Tv. dos Piornais 9000, 9000-000 Funchal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859426/No-Photo-Available_xposkb.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4'], 
    },
    {
    name: 'Bar 21',         
    opening_hours: '10:00',
    address: 'ER203',
    rating: 4.3, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669861237/21_mplrjb.jpg",  
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4']
    },
    {
    name: 'O Girinho',       
    opening_hours: '07:00',
    address: ' n°1, Caminho Mun. dos Caboucos, Camacha',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669861371/girinho_xeunls.jpg",  
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4']
    },
    {
    name: 'Venda do Sócio',       
    opening_hours: '07:00',
    address: 'R. Sidónio Serôdio nº 1, 9125-114 Caniço',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669861456/socio_qpszsq.jpg",  
    dentinho: ['6389043c805ffa5924c24cae', '6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca5']
    },
    {
    name: 'As Asinhas',       
    opening_hours: '10:30',
    address: 'Estr. da Boa Nova 71A, 9060-289 Funchal',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669861711/asinhas_zhstm1.jpg",  
    dentinho: ['6389043c805ffa5924c24ca9']
    },
    {
    name: 'Venda do André',       
    opening_hours: '09:00',
    address: 'Estr. João Gonçalves Zarco, Quinta Grande',
    rating: 4.6, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669862167/andre_wq3hu3.jpg",  
    dentinho: ['6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca5']
    },
    {
    name: 'Poncha da Fátima',       
    opening_hours: '07:30',
    address: 'Fonte de santo antonio, ER108 38, Machico',
    rating: 4.6, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669862435/fatima_moqigl.jpg",  
    dentinho: ['6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca5', '6389043c805ffa5924c24caa']
    },
    {
    name: 'Adega do Pomar',       
    opening_hours: '11:00',
    address: 'R. Maria Ascensão, 9135-060 Camacha',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669862832/pomar_gnsv2q.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4']
    },
    {
    name: 'Sete Mares',       
    opening_hours: '10:00',
    address: 'Av. Sá Carneiro 3, Funchal',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669863189/mares_c0dng9.jpg",  
    dentinho: ['6389043c805ffa5924c24ca3', '6389043c805ffa5924c24ca4']
    },
    {
    name: 'Taberna da Poncha',       
    opening_hours: '09:30',
    address: 'Laje Serra De Agua Sitio da Lage, Serra de Água, Ribeira Brava, Madeira 9350-309 Portugal',
    rating: 4.7, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669863403/taberna_fzehq0.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4']
    },
    {
    name: 'Pub Number Two',       
    opening_hours: '09:00',
    address: 'Estrada Monumental 188A, 9000-018 Funchal',
    rating: 4.5, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669863667/number2_dfw41a.jpg",  
    dentinho: ['6389043c805ffa5924c24ca4', '6389043c805ffa5924c24ca3']
    },
    {
    name: 'Reguilha',
    opening_hours: '16:00',
    address: 'Estr. do Portinho, Gaula',
    rating: 4.4, 
    picture_url: "https://res.cloudinary.com/duy4rj4hd/image/upload/v1669859426/No-Photo-Available_xposkb.jpg",  
    dentinho: ['6389043c805ffa5924c24cb5', '6389043c805ffa5924c24ca3']
    }
 
];

const seedDB = async bars => {
    try {
        const dbConnection = await mongoose.connect('mongodb://localhost/DentolasProject');
        console.log('Connection made to:', dbConnection.connections[0].name);
        await Bars.create(bars)
        console.log('Created the bars')
    } catch(error) {
        console.log('An error occurred', error)
    } finally {
        await mongoose.connection.close();
    }
  }

  seedDB(bars);