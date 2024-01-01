/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Tests whether all elements in a collection are truthy.
*
* ## Notes
*
* -   The function immediately returns upon encountering a falsy value.
* -   If provided an empty collection, the function returns `true`.
*
* @param collection - input collection
* @returns boolean indicating whether all elements are truthy
*
* @example
* var arr = [ 1, 1, 1, 1, 1 ];
*
* var bool = every( arr );
* // returns true
*/
declare function every( collection: Collection ): boolean;


// EXPORTS //

export = every;
