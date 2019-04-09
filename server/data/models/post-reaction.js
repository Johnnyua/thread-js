export default (orm, DataTypes) => {
    const PostReaction = orm.define('PostReaction', {
        isLike: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {});

    PostReaction.associate = ({ Post, User }) => {
        PostReaction.belongsTo(Post);
        PostReaction.belongsTo(User);
    };

    return PostReaction;
};