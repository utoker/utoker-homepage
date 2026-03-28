import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title, description }) => {
  const t = `${title} - Umut Toker`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta property="og:title" content={t} />
            {description && (
              <>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
              </>
            )}
            <meta name="twitter:title" content={t} />
            {description && (
              <meta name="twitter:description" content={description} />
            )}
          </Head>
        )}
        {children}
      </>
    </motion.article>
  )
}

export default Layout
