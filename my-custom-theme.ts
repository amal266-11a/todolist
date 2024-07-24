
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "6px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #6cbaea 
		"--color-primary-50": "233 245 252", // #e9f5fc
		"--color-primary-100": "226 241 251", // #e2f1fb
		"--color-primary-200": "218 238 250", // #daeefa
		"--color-primary-300": "196 227 247", // #c4e3f7
		"--color-primary-400": "152 207 240", // #98cff0
		"--color-primary-500": "108 186 234", // #6cbaea
		"--color-primary-600": "97 167 211", // #61a7d3
		"--color-primary-700": "81 140 176", // #518cb0
		"--color-primary-800": "65 112 140", // #41708c
		"--color-primary-900": "53 91 115", // #355b73
		// secondary | #f3f3f3 
		"--color-secondary-50": "253 253 253", // #fdfdfd
		"--color-secondary-100": "253 253 253", // #fdfdfd
		"--color-secondary-200": "252 252 252", // #fcfcfc
		"--color-secondary-300": "250 250 250", // #fafafa
		"--color-secondary-400": "247 247 247", // #f7f7f7
		"--color-secondary-500": "243 243 243", // #f3f3f3
		"--color-secondary-600": "219 219 219", // #dbdbdb
		"--color-secondary-700": "182 182 182", // #b6b6b6
		"--color-secondary-800": "146 146 146", // #929292
		"--color-secondary-900": "119 119 119", // #777777
		// tertiary | #a15d47 
		"--color-tertiary-50": "241 231 227", // #f1e7e3
		"--color-tertiary-100": "236 223 218", // #ecdfda
		"--color-tertiary-200": "232 215 209", // #e8d7d1
		"--color-tertiary-300": "217 190 181", // #d9beb5
		"--color-tertiary-400": "189 142 126", // #bd8e7e
		"--color-tertiary-500": "161 93 71", // #a15d47
		"--color-tertiary-600": "145 84 64", // #915440
		"--color-tertiary-700": "121 70 53", // #794635
		"--color-tertiary-800": "97 56 43", // #61382b
		"--color-tertiary-900": "79 46 35", // #4f2e23
		// success | #46b983 
		"--color-success-50": "227 245 236", // #e3f5ec
		"--color-success-100": "218 241 230", // #daf1e6
		"--color-success-200": "209 238 224", // #d1eee0
		"--color-success-300": "181 227 205", // #b5e3cd
		"--color-success-400": "126 206 168", // #7ecea8
		"--color-success-500": "70 185 131", // #46b983
		"--color-success-600": "63 167 118", // #3fa776
		"--color-success-700": "53 139 98", // #358b62
		"--color-success-800": "42 111 79", // #2a6f4f
		"--color-success-900": "34 91 64", // #225b40
		// warning | #ddbb5f 
		"--color-warning-50": "250 245 231", // #faf5e7
		"--color-warning-100": "248 241 223", // #f8f1df
		"--color-warning-200": "247 238 215", // #f7eed7
		"--color-warning-300": "241 228 191", // #f1e4bf
		"--color-warning-400": "231 207 143", // #e7cf8f
		"--color-warning-500": "221 187 95", // #ddbb5f
		"--color-warning-600": "199 168 86", // #c7a856
		"--color-warning-700": "166 140 71", // #a68c47
		"--color-warning-800": "133 112 57", // #857039
		"--color-warning-900": "108 92 47", // #6c5c2f
		// error | #b3323f 
		"--color-error-50": "244 224 226", // #f4e0e2
		"--color-error-100": "240 214 217", // #f0d6d9
		"--color-error-200": "236 204 207", // #eccccf
		"--color-error-300": "225 173 178", // #e1adb2
		"--color-error-400": "202 112 121", // #ca7079
		"--color-error-500": "179 50 63", // #b3323f
		"--color-error-600": "161 45 57", // #a12d39
		"--color-error-700": "134 38 47", // #86262f
		"--color-error-800": "107 30 38", // #6b1e26
		"--color-error-900": "88 25 31", // #58191f
		// surface | #b1987c 
		"--color-surface-50": "243 240 235", // #f3f0eb
		"--color-surface-100": "239 234 229", // #efeae5
		"--color-surface-200": "236 229 222", // #ece5de
		"--color-surface-300": "224 214 203", // #e0d6cb
		"--color-surface-400": "200 183 163", // #c8b7a3
		"--color-surface-500": "177 152 124", // #b1987c
		"--color-surface-600": "159 137 112", // #9f8970
		"--color-surface-700": "133 114 93", // #85725d
		"--color-surface-800": "106 91 74", // #6a5b4a
		"--color-surface-900": "87 74 61", // #574a3d
		
	}
}