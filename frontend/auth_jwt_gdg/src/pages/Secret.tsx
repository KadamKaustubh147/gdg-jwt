import LetterGlitch from '../components/LetterGlitch/LetterGlitch';
import TextType from '../components/TextType/TextType';



const AppPage = () => {
  console.log(`I speak without a tongue, yet my truths are sown,
Not in the code, but where colors are shown.
I dress the page in hues and guise,
Seek the body's style—there the secret lies.`);
  

  return (
    <div className="bg-black text-white h-[100vh]">

      <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
        <LetterGlitch
          glitchSpeed={50}
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />

      </div>

      <div className='relative flex flex-col h-[100vh] justify-center'>

        <div className='text-5xl font-medium w-8/10 flex justify-center items-center pl-[20%]
'>

          <TextType
            text={[`I speak without a tongue, my words are never shown. Detectives press a secret key to view the truths I've sown. I'm where errors love to gather, and clues parade in rows. Open me to claim the key — but only sleuths will know.`]}
            typingSpeed={90}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <span>

        </span>


        {/* <button onClick={logout}>Logout</button> */}
      </div>
    </div >
  )
}

export default AppPage