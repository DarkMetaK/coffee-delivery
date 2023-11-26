import AmericanoImage from './assets/Americano.png'
import ArabeImage from './assets/Arabe.png'
import CafeComLeiteImage from './assets/CafeComLeite.png'
import CafeGeladoImage from './assets/CafeGelado.png'
import CappucinoImage from './assets/Capuccino.png'
import ChocolateQuenteImage from './assets/ChocolateQuente.png'
import CubanoImage from './assets/Cubano.png'
import ExpressoImage from './assets/Expresso.png'
import ExpressoCremosoImage from './assets/ExpressoCremoso.png'
import HavaianoImage from './assets/Havaiano.png'
import IrlandesImage from './assets/Irlandes.png'
import LatteImage from './assets/Latte.png'
import MacchiatoImage from './assets/Macchiato.png'
import MochaccinoImage from './assets/Mochaccino.png'

export const database = [
  {
    id: 1,
    imageURL: ExpressoImage,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: 2,
    imageURL: AmericanoImage,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: 3,
    imageURL: ExpressoCremosoImage,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: 4,
    imageURL: CafeGeladoImage,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: 5,
    imageURL: CafeComLeiteImage,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: 6,
    imageURL: LatteImage,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: 7,
    imageURL: CappucinoImage,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Cappucino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: 8,
    imageURL: MacchiatoImage,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: 9,
    imageURL: MochaccinoImage,
    tags: ['Tradicional', 'Com Leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: 10,
    imageURL: ChocolateQuenteImage,
    tags: ['Especial', 'Com Leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: 11,
    imageURL: CubanoImage,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: 12,
    imageURL: HavaianoImage,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: 13,
    imageURL: ArabeImage,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: 14,
    imageURL: IrlandesImage,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
