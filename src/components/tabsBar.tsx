import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function TabsBar() {
  const router = useRouter();

  return (
    <div className="tabsBar">
      <div className="tabs">
        <Link href={"/"}>
          <div className= {router.pathname === '/' ? 'active tab' : 'tab'}>
              <p>Présentation.html</p>
            <Image
              src="/assets/icons/close.png"
              width={16}
              height={16}
              alt="Files icon"
            />
          </div>
        </Link>
        <Link href={"/projets"}>
          <div className={router.pathname === '/projets' ? 'active tab' : 'tab'}>
              <p>Projets.css</p>
            <Image
              src="/assets/icons/close.png"
              width={16}
              height={16}
              alt="Files icon"
            />
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className={router.pathname === '/contact' ? 'active tab' : 'tab'}>
              <p>Contact.js</p>
            <Image
              src="/assets/icons/close.png"
              width={16}
              height={16}
              alt="Files icon"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TabsBar;
