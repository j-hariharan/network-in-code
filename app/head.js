import { basePath } from '../next.config';

const Head = () => (
  <>
    <title>CodeRed</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={`${basePath}/codered-logo.png`} />
  </>
);

export default Head;
