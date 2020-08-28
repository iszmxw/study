module.exports = [
    getSideBar('MongoDB', [
        ['/MongoDB/readme', 'MongoDB'],
        ['/MongoDB/InstallRedHat', 'RedHat环境安装']
    ])
]

function getSideBar(_title, _children) {
    return {
        title: _title,
        collapsable: true,
        // displayAllHeaders: true,
        children: _children
    }
}