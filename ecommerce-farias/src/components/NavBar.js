import './NavBar.css'

function NavBar() {
    return (
        <header className='navBar'>
            <nav>
                <div>
                    <a href="../../public/index.html">E_COMMERCE</a>
                </div>
                <ul>
                    <li><a>Produtos</a></li>
                    <li><a>Novidades</a></li>
                    <li><a>Ofertas</a></li>
                </ul>
                <ul>
                    <li><button>Login</button></li>
                    <li><button>Cadastro</button></li>
                    <li><button>Carrinho</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;