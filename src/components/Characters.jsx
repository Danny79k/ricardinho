import React from 'react'

export const Characters = (props) => {
  const { characters, setCharacters } = props
  const resetCharacter = () => {
    setCharacters(null)
  }
  return (
    <div className='character'>
      <h1>Character</h1>
      <span className='back-home' onClick={resetCharacter}>Volver a home</span>
      <div className='container-characters'>
        {characters.map((character,index) => (
          <div className='character-container' key={index}>
            <div>
              <img src={character.image} alt={character.name}/>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className='Alive'>
                      Alive
                    </span>
                  </>
                ) : (
                  <>
                    <span className='Dead'>
                      Dead
                    </span>
                  </>
                )}
              </h6>
              <p className='text-grey'>Episodios:</p>
              <span>{character.episode.length}</span>
              <h6 className='specie'>{character.species}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
