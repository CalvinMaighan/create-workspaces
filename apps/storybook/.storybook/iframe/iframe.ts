import {configure, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
// @ts-ignore
import * as storiesMap from '../../stories/**/*.stories.@(mdx|js|jsx|ts|tsx)'

const findESM = (currentModule: any, result: any[] = []) => {
    if (currentModule && typeof currentModule === 'object') {
        if ('__esModule' in currentModule) {
            result.push(currentModule)
        } else {
            Object.values(currentModule).forEach(subModule =>
                findESM(subModule, result)
            )
        }
    }
    return result
}

const stories = findESM(storiesMap)

addDecorator(withKnobs)

configure(() => stories, module)
