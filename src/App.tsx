import Article from './component/Article'
import Header from './component/Header'
import makeArticles from './utils/createPost'
import { UserArticle } from "./models/models";
import { IoLogoReddit, IoMdHelpCircleOutline, IoMdMegaphone } from 'react-icons/io';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { SlWrench } from 'react-icons/sl';
import { GiMicrophone } from 'react-icons/gi';
import { IoGameControllerOutline, IoHomeOutline } from 'react-icons/io5';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaSmileBeam } from "react-icons/fa";
import { MdQuestionAnswer } from 'react-icons/md';
import { GoCpu } from 'react-icons/go';
import { RiShieldStarLine } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';

function App() {
  const {articles} = makeArticles(10);

  return (
    <>
    <Header />
    <div className="relative md:flex">
      <div className="flex-none min-w-[250px] hidden md:inline-block border-r border-slate-500/50 text-xs">
        {/* Code Seperator */}
        <div className="flex-none">
          <ul className="mx-4 mt-4">
            <li className="side-nav-item active"><IoHomeOutline className="text-xl" /> Home</li>
            <li className="side-nav-item"><FaArrowUpRightFromSquare className="text-xl" /> Popular</li>
          </ul>
          {/* Code Seperator */}
          <details className="mx-4">
            <summary>Topics</summary>
              <a className="side-nav-item" href="#"><FaSmileBeam className="text-xl" />Internet Culture</a>
              <a className="side-nav-item" href="#"><IoGameControllerOutline className="text-xl" />Games</a>
              <a className="side-nav-item" href="#"><MdQuestionAnswer className="text-xl" />Q&As</a>
              <a className="side-nav-item" href="#"><GoCpu className="text-xl" />Technology</a>
              <a className="side-nav-item" href="#"><RiShieldStarLine className="text-xl" />Pop Culture</a>
              <a className="side-nav-item" href="#"><BiMoviePlay className="text-xl" />Movies & TV</a>
              <a className="side-nav-item text-[10px]">See more...</a>
          </details>

          {/* Code Seperator */}
          <details className="mx-4">
            <summary>Resources</summary>
                <a className="side-nav-item" href="#"><IoLogoReddit className="text-xl" /> About Cloneit</a>
                <a className="side-nav-item" href="#"><IoMdMegaphone className="text-xl" />Advertise</a>
                <a className="side-nav-item" href="#"><IoMdHelpCircleOutline className="text-xl" />Help</a>
                <a className="side-nav-item" href="#"><HiOutlineBookOpen className="text-xl" /> Blog</a>
                <a className="side-nav-item" href="#"><SlWrench className="text-xl" /> Careers</a>
                <a className="side-nav-item" href="#"><GiMicrophone className="text-xl" /> Press</a>
              <hr className="border-neutral-600" />
                <a href="#" className="side-nav-item">Communities</a>
                <a href="#" className="side-nav-item">Best of Cloneit</a>
                <a href="#" className="side-nav-item">Topics</a>
              <hr className="border-neutral-600" />
                <a href="#" className="side-nav-item">Content Policy</a>
                <a href="#" className="side-nav-item">Privacy Policy</a>
                <a href="#" className="side-nav-item">User Agreement</a>
          </details>

          <footer className="sticky bottom-0 text-center text-neutral-400/75 bg-neutral-900">
          <span className="text-[.55rem]">Cloneit Inc. &copy; 2024. All rights reserved.</span>
          </footer>
        </div>

      </div>
      <div className="flex-auto mx-auto max-w-[800px]">
        <div className="w-full">
          <ArticleList articles={articles} />
        </div>
      </div>
    </div>
    </>
  )
}

const ArticleList = ({ articles }: { articles: UserArticle[] }) => {
  const articleList = articles.map((article) => <Article key={article.id} article={article}/>)

  return articleList
}

export default App