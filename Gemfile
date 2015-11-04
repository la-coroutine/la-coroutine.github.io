require 'json'
require 'open-uri'

versions = JSON.parse(open('https://pages.github.com/versions.json').read)

source 'https://rubygems.org'

gem 'github-pages', versions['github-pages']
