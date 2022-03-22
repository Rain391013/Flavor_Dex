import styled from 'styled-components'

// const Container = styled.div`
//   height: 100%;
//   margin: 0;
//   background-attachment:fixed;
//   background-image:
//   linear-gradient(
//   130deg,
//   rgba(245,169,202,0) 0%,
//   rgba(248,194,217,0) 44%,
//   rgba(252,226,237,0) 100%
// );
//   margin-left: auto;
//   margin-right: auto;
//   max-width: 1200px;
//   padding-left: 16px;
//   padding-right: 16px;

//   ${({ theme }) => theme.mediaQueries.sm} {
//     padding-left: 24px;
//     padding-right: 24px;
//   }
// `

const Container = styled.div`
  margin: 0;
  background-attachment:fixed;
  background-image:
  linear-gradient(
  130deg,
  rgba(245,169,202,0) 0%,
  rgba(248,194,217,0) 44%,
  rgba(252,226,237,0) 100%
);
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

export default Container
