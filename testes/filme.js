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
  constructor() {
    this.nome = '';
    this.tipo = '';
    this.tamanho = '';
    this.tipoPoder = '';
    this.principaisPoderes = [];
    this.fraquezas = [];
    this.resistente = '';
  }

  Andar() {
    console.log('Andou...');
  }

  Atacar() {
    console.log('Atacou...');
  }

  Defender() {
    console.log('Defendeu...');
  }

  Correr() {
    console.log('Correu...');
  }
}

class Carro {
  constructor() {
    this.modelo = 'Honda';
    this.ano = 2020;
    this.precoAluguelPorDia = 200;
    this.qntdPortas = 4;
    this.automaticoOuManual = 'Manual';
  }

  Andar() { }
  Buzinar() { }
  Frear() { }
  MudarMarcha() { }
  Acelerar() { }
  Virar() { }
}

class UserSocialMedia {
  constructor() {
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

  DarLike() { }
  Compartilhar() { }
  Adicionar() { }
  Remover() { }
  Bloquear() { }
  MandarMensagens() { }
}

class Video {
  constructor() {
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

  Pausar() { }
  Compartilhar() { }
  Avancar() { }
  Maximizar() { }
  Minimizar() { }
  Legendar() { }
  AumentarAudio() { }
  DiminuirAudio() { }
  Configurar() { }
}

class Aluno {
  constructor() {
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

  acessarAula() { }
  acessarLivro() { }
  Comentar() { }
  ConcluirAtividade() { }
  AnexarArquivo() { }
}

class Encomenda {
  constructor() {
    this.local = ''
    this.precoFrete = 000
    this.produto = ''
    this.pesoProduto = ''
    this.isFlex = true;
    this.dataParaLevar = ''
  }
}

class Banda {
  constructor() {
    this.nome = ''
    this.integrantes = []
    this.tipoMusicaBanda = ''
    this.qntdAlbuns = 8
    this.qntdMusicas = 4
    this.musicas = [{}, {}, {}, {}]
    this.sinopseBanda = ''
  }
}

class PedidoDelivery {
  constructor() {
    this.tipoComida = ''
    this.tipoBebida = ''
    this.precoDaComida = 0
    this.precoDaBebida = 0
    this.temDesconto = true
    this.precoFrete = ''
    this.horarioChegadaComida = ''
    this.meioDeTriagemMotoboy = ''
    this.nomeMotoboy = ''
  }

  Escolher() { }
  Pedir() { }
  Pagar() { }
}

class AgendamentoDentista {
  constructor() {
    this.nomePaciente = '';
    this.cpf = 0;
    this.faixaEtariaPaciente = 0;
    this.doutor = '';
    this.data = ''
    this.operacao = '';
    this.horario = 0;
    this.preco = 0;
  }

  Agendar() { }
  Cancelar() { }
  MudarData() { }
  MudarHorario() { }
  MudarOperacao() { }
  MudarDoutor() { }
}

class ConexaoBC {
  constructor() {
    this.senha = '';
    this.root = '';
    this.nomeBancoDados = '';
    this.host = '';
    this.dialect = '';
    this.timezone = '';
  }

  Connectar() { }
  Desconectar() { }
}

class MensagemWhatsApp {
  constructor() {
    this.data = ''
    this.horario = 0
    this.texto = ''
    this.autor = ''
  }

  Apagar() { }
  Compartilhar() { }
  Mencionar() { }
  Reportar() { }
  Favoritar() { }
}

class InvertarioPersonagemJogoRPG {
  constructor() {
    this.armaduras = [{}, {}];
    this.armas = [{}, {}];
    this.qntdItems = [{}];
    this.vida = 0;
    this.poderDeAtaque = 0;
    this.poderDeExploxao = 0;
    this.defesa = 0
    this.roupas = [{}, {}]
  }

  Equipar() { }
  SoltarItem() { }
  MelhorarArma() { }
  MelhorarArmadura() { }
  MelhorarAtaque() { }
  MelhorarDefesa() { }
  Vestir() { }
}

class GpRedeSocial {
  constructor() {
    this.fotoPerfilGrupo = ''
    this.descricaoGp = ''
    this.qntdPessoas = 0;
    this.mensagens = 0;
    this.pessoas = [{}, {}, {}]
    this.dataCriacaoGp = ''
    this.media = [{
      arquivos: [{}, {}, {}],
      fotos: [{}, {}],
      videos: [{}, {}]
    }]
  }

  AdicionarPessoas() { }
  RemoverPessoas() { }
  PromoverALider() { }
  EnviarMensagem() { }
  ExcluirMensagem() { }
}

class PlayerVideo {
  constructor() {
    this.pathVideo = ''
  }

  Pausar() { }
  Legendar() { }
  Reproduzir() { }
  Compartilhar() { }
  Baixar() { }
  Maximizar() { }
  Minimizar() { }
  Acelerar() { }
  Voltar() { }
  AdicionarNota() { }
}

class StorieInstagram{
  constructor(){
    this.perfil = '';
    this.tempoPublicado = '';
    this.tempoVideo = '';
  }

  Passar(){}
  Voltar(){}
  Inspecionar(){}
  Compartilhar(){}
  MandarMensagemPerfil(){}
  TestarFiltro(){}
}

class Buscador{
  constructor() {
    this.texto = ''
  }

  Digitar(){}
  Deletar(){}
  Pesquisar(){}
}

class BuscaGoogle{
  constructor(){
    this.textoPesquisa = '';
    this.qntdDeResultados = 0;
    this.resultados = [{}, {}]
  }

  Acessar(){}
}

class NotificacaoFacebook{
  constructor(){
    this.nomePessoa = '';
    this.horario = '';
    this.tipoAcao = '';
    this.haQuantoTempo = 0;
  }

  Acessar(){}
}

class CursoUdemy{
  constructor() {
    this.nomeCurso = ''
    this.nomeAutor = ''
    this.tipoCurso = ''
    this.qntdHoras = 0
    this.banner = ''
    this.foto = ''
    this.qntdAulas = 0
    this.aulas = [{}, {}]
  }

  AcessarAulas(){}
  AdicionarComentario(){}
  DarLike(){}
  PularAulas(){}
  MarcarAulaComoFeita(){}
  MarcarAulaNaoComoFeita(){}
}