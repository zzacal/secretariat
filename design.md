# Design

Applications often need configurations to serve their purpose. Some of those configurations are in the form of secrets.
Secrets are pieces of information that should only be known to parts of the application that need them.

## Problems

1. There are many secret storage mechanisms
1. Different environments require different mechanisms, sometimes a mix storage mechanisms
1. Different storage mechanisms have a different set of naming conventions
1. It is common to add more secrets as the application grows
1. Abstracting away how secrets are fetched leads to code complexity

## Guiding Principles

1. It should have a simple interface
1. It should be easy to add different storage mechanisms
1. It should minimize dependencies
1. It should not allow naming conventions based on storage mechanisms
1. It should be well-documented

## Technical Solutions

1. A common interface that has a simple `.get()` method
1. A modular approach to storage mechanisms
1. There is no non-secret configuration
1. All mechanisms must be configured with the same key names
