
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

// Layout Component가 Higher Order Component의 경우.
// HOC는 컴포넌트를 던져서 컴포넌트를 반환하는 형태를 말한다.

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout