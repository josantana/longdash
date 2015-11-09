//  Namespace: __
//  Module: memory
//  Method: type

var storageType = ('localStorage' in window && window.localStorage !== null) ? 'localStorage' : 'cookie';
