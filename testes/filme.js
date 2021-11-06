class Filme {
  constructor() {
    this.titulo = '';
    this.ano = 2000;
    this.genero = '';
    this.diretor = '';
    this.atores = [];
    this.duracao = 0;
  }

  Reproduzir() {
    console.log('Reproduzir...')
  }

  Pausar() {
    console.log('Pausado...')
  }

  Avancar() {
    console.log('Avançar >>')
  }

  Fechar() {
    console.log('Fechado...')
  }
}

// Produto para Loja
class Produto {
  constructor() {
    this.codigoBarras = '2761382381263712386172';
    this.nome = 'Arroz'
    this.preco = 10.00;
    this.peso = 15;
    this.tipo = 'Básico';
    this.marca = 'Arrozito';
  }
}

// Carrinho de compras
class Carrinho {
  constructor() {
    this.tamanho = 'Médio';
    this.qntdRodas = 4;
    this.conservado = true;
    this.marca = 'SpaceX';
    this.materialConstruido = 'Metal';
  }

  Andar() {
    console.log('Andar...')
  }
}

//Comida para sistema de Cardáprio
class ComidaCardapio {
  constructor() {
    this.foto = '[FOTO]';
    this.nome = 'Massa';
    this.ingredientes = 'Massa e tomate';
    this.preco = 0;
    this.temAcompanhamentos = true;
  }
}

//PersonagemRPG
class PersonagemRPG {
  constructor(){
    this.nome = '';
    this.tipo = '';
    this.tamanho = '';
    this.tipoPoder = '';
    this.principaisPoderes = [];
    this.fraquezas = [];
    this.resistente = '';
  }

  Andar(){
    console.log('Andou...');
  }

  Atacar(){
    console.log('Atacou...');
  }

  Defender(){
    console.log('Defendeu...');
  }

  Correr(){
    console.log('Correu...');
  }
}

class Carro {
  constructor(){
    this.modelo = 'Honda';
    this.ano = 2020;
    this.precoAluguelPorDia = 200;
    this.qntdPortas = 4;
    this.automaticoOuManual = 'Manual';
  }

  Andar(){}
  Buzinar(){}
  Frear(){}
  MudarMarcha(){}
  Acelerar(){}
  Virar(){}
}

class UserSocialMedia{
  constructor(){
    this.nome = '';
    this.dataNasc = '';
    this.status = '';
    this.sweetHome = '';
    this.estadoCivil = '';
    this.fotos = [{
      foto: '',
      anoFoto: 2020
    }, {
      foto: '',
      anoFoto: 2020
    }];
    this.vides = [{}];
    this.amigos = [{}, {}]
  }

  DarLike(){}
  Compartilhar(){}
  Adicionar(){}
  Remover(){}
  Bloquear(){}
  MandarMensagens(){}
}

class Video{
  constructor(){
    this.tipoConteudo = ''
    this.tempoVideo = ''
    this.qntdLikes = 0
    this.qntdDeslikes = 0
    this.qntdComentarios = 0
    this.thumbnail = 'urlFoto'
    this.descricao = ''
    this.tags = ''
    this.chaves = ''
    this.dataPublicacao = ''
  }

  Pausar(){}
  Compartilhar(){}
  Avancar(){}
  Maximizar(){}
  Minimizar(){}
  Legendar(){}
  AumentarAudio(){}
  DiminuirAudio(){}
  Configurar(){}
}

class Aluno{
  constructor(){
    this.nomeAluno = ''
    this.serie = ''
    this.idade = ''
    this.cpf = 000
    this.acessoAQuaisLivros = []
    this.acessoAQuaisAulas = []
    this.atividadesPendentes = [{}, {}]
    this.atividadesRecebidas = [{}, {}, {}, {}, {}, {}]
    this.atividadesConcluidas = [{}, {}, { concluida: {} }]
  }

  acessarAula(){}
  acessarLivro(){}
  Comentar(){}
  ConcluirAtividade(){}
  AnexarArquivo(){}
}

class Encomenda{
  constructor(){
    this.local = ''
    this.precoFrete = 000
    this.produto = ''
    this.pesoProduto = ''
    this.isFlex = true;
    this.dataParaLevar = ''
  }
}

class Banda{
  constructor(){
    this.nome = ''
    this.integrantes = []
    this.tipoMusicaBanda = ''
    this.qntdAlbuns = 8
    this.qntdMusicas = 4
    this.musicas = [{}, {}, {}, {}]
    this.sinopseBanda = ''
  }
}

class PedidoDelivery{
  constructor(){
    this.tipoComida = ''
    this.tipoBebida = ''
    this.precoDaComida = 0
    this.precoDaBebida = 0
    this.temDesconto = true
    this.precoFrete = ''
    this.horarioChegadaComida = ''
  }
}