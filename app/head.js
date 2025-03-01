import { basePath } from '../next.config';

const Head = () => (
  <>
    <title>Network In Code 2025</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={`${basePath}/CNI_round.png`} />
  </>
);

export default Head;
