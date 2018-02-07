import React from 'react';

import SyllabusListItemTable from './SyllabusListItemTable';

const SyllabusListItem = ({ syllabus, auth }) => {
  const thoerySyllabus = syllabus.filter((item) => item.type === 'theory');
  const practicalSyllabus = syllabus.filter(
    (item) => item.type === 'practical'
  );

  return (
    <div>
      <h3>Theory</h3>
      <SyllabusListItemTable syllabus={thoerySyllabus} auth={auth} />
      <h3>Practical / Viva Voce</h3>
      <SyllabusListItemTable syllabus={practicalSyllabus} auth={auth} />
    </div>
  );
};

export default SyllabusListItem;