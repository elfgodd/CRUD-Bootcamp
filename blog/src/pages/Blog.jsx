import { useParams } from 'react-router-dom'

const Blog = () => {
  function makeTitle(slug) {
    var words = slug.split('-')

    for (var i = 0; i < words.length; i++) {
      var word = words[i]
      words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return words.join(' ')
  }

  const { slug } = useParams()
  return (
    <div>
      <h1>Title - {makeTitle(slug)}</h1>
    </div>
  )
}

export default Blog
