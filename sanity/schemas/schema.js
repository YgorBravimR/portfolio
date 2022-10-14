import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import experiences from './experiences'
import pageInfo from './pageInfo'
import projects from './projects'
import skills from './skills'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    experiences,
    pageInfo,
    projects,
    skills,
    social
  ]),
})
