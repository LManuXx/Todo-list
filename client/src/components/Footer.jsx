import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-4 text-white text-center fixed bottom-0 w-full">
      <div className="flex justify-center space-x-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
      </div>
      <p className="mt-2 text-gray-300">© 2023 MaL1st. Todos los derechos reservados.</p> {/* Cambiamos el color del texto a gris claro */}
    </footer>
  );
};

export default Footer;
